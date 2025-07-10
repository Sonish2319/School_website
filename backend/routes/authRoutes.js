const express = require('express');
const { register, login, refresh } = require('../controllers/authController');
const { body } = require('express-validator');

const router = express.Router();

router.post('/register', [
  body('name').notEmpty(),
  body('email').isEmail(),
  body('password').isLength({ min: 6 }),
], register);

router.post('/login', login);
router.post('/refresh', refresh);

module.exports = router;
