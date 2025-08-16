const express = require('express');
const router = express.Router();
const controller = require('../../controllers/contact/touch.controller');

router.post('/', controller.createTouch);
router.get('/', controller.getAllTouch);
router.get('/:id', controller.getTouchbyId);
router.put('/:id', controller.updateTouch);
router.delete('/:id', controller.deleteTouch);

module.exports = router;
