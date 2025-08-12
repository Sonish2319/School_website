// routes/aboutus/leadership.routes.js
const express = require('express');
const router = express.Router();
const upload = require('../../middleware/upload');
const controller = require('../../controllers/aboutus/leadership.controller');

router.post('/', upload.single('image'), controller.createLeader);
router.get('/', controller.getAllLeaders);
router.get('/:id', controller.getLeaderById);
router.put('/:id', upload.single('image'), controller.updateLeader);

module.exports = router;
