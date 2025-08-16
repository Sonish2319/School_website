const express = require('express');
const router = express.Router();
const controller = require('../../controllers/contact/visit.controller');

router.post('/', controller.createVisit);
router.get('/', controller.getAllVisit);
router.get('/:id', controller.getVisitById);
router.put('/:id', controller.updateVisit);
router.delete('/:id', controller.deleteVisit);

module.exports = router;
