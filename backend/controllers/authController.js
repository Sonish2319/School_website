const { User } = require('../models');
const jwt = require('jsonwebtoken');

// In-memory store for refresh tokens (in production, use DB or Redis)
let refreshTokens = [];

// Generate access token
const generateAccessToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || '15m',
  });
};

// Generate refresh token
const generateRefreshToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '7d', // or store this in env
  });
};

// @route   POST /api/auth/register
const register = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    const userExists = await User.findOne({ where: { email } });
    if (userExists)
      return res.status(400).json({ message: 'User already exists' });

    const user = await User.create({ name, email, password, role });

    const accessToken = generateAccessToken(user.id);
    const refreshToken = generateRefreshToken(user.id);
    refreshTokens.push(refreshToken);

    const { password: _, ...userData } = user.toJSON();

    res.status(201).json({
      ...userData,
      accessToken,
      refreshToken,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @route   POST /api/auth/login
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });

    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const accessToken = generateAccessToken(user.id);
    const refreshToken = generateRefreshToken(user.id);
    refreshTokens.push(refreshToken);

    const { password: _, ...userData } = user.toJSON();

    res.json({
      ...userData,
      accessToken,
      refreshToken,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @route   POST /api/auth/refresh
const refresh = (req, res) => {
  const { token } = req.body;

  if (!token || !refreshTokens.includes(token)) {
    return res.status(403).json({ message: 'Invalid or missing refresh token' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const newAccessToken = generateAccessToken(decoded.id);
    res.json({ accessToken: newAccessToken });
  } catch (err) {
    return res.status(403).json({ message: 'Expired or invalid token' });
  }
};

module.exports = { register, login, refresh };
