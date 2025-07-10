const express = require('express');
const {
  getUsers,
  getCurrentUser,
  updateUser,
  deleteUser
} = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');
const { checkRole } = require('../middleware/roleMiddleware');

const router = express.Router();

router.get('/', protect, checkRole('admin'), getUsers);         // Admin-only
router.delete('/:id', protect, checkRole('admin'), deleteUser); // Admin-only
router.get('/me', protect, getCurrentUser);                     // Any logged-in user
router.put('/:id', protect, updateUser);                        // Optional role check


module.exports = router;
