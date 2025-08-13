const express = require('express');
const router = express.Router();
const controller = require('../../controllers/admission/timeline.controller');

router.post('/', controller.createTimeline);
router.get('/', controller.getAllTimelines);
router.get('/:id', controller.getTimelineById);
router.put('/:id', controller.updateTimeline);
router.delete('/:id', controller.deleteTimeline);

module.exports = router;
