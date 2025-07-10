const { User } = require('../models');

// @desc    Get all users (admin only)
// @route   GET /api/users
// @access  Private
const getUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: { exclude: ['password'] },
    });
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Get currently authenticated user
// @route   GET /api/users/me
// @access  Private
const getCurrentUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id, {
      attributes: { exclude: ['password'] },
    });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Update a user (self or admin)
// @route   PUT /api/users/:id
// @access  Private
const updateUser = async (req, res) => {
  try {
    const { name } = req.body;
    const user = await User.findByPk(req.params.id);

    if (!user) return res.status(404).json({ message: 'User not found' });

    user.name = name || user.name;
    await user.save();

    const { password: _, ...userWithoutPassword } = user.toJSON();

    res.json(userWithoutPassword);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Delete a user (admin only)
// @route   DELETE /api/users/:id
// @access  Private
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    await user.destroy();
    res.json({ message: 'User deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getUsers, getCurrentUser, updateUser, deleteUser };
