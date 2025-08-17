const express = require('express');
const router = express.Router();
const upload = require('../../middleware/upload');
const controller = require('../../controllers/event/upcomming.controller');

router.post('/', upload.single('image'), controller.createUpcommingEvent);
router.get('/', controller.getAllUpcommingEvent);
router.get('/:id', controller.getUpcommingEventById);
router.put('/:id', upload.single('image'), controller.updateUpcommingEvent);
router.delete('/:id', controller.deleteUpcommingEvent);

module.exports = router;
