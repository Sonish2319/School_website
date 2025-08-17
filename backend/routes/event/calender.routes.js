const express = require('express');
const router = express.Router();
const controller = require('../../controllers/event/calender.controller');

router.post('/', controller.createCalender);
router.get('/', controller.getAllCalenders);
router.get('/:id', controller.getCalenderById);
router.put('/:id', controller.updateCalender);
router.delete('/:id', controller.deleteCalender);

module.exports = router;
