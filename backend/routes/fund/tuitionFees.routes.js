const express = require('express');
const router = express.Router();
const controller = require('../../controllers/fund/tuitionFees.controller');

router.post('/', controller.createTuitionFees);
router.get('/', controller.getAllTuitionFees);
router.get('/:id', controller.getTuitionFeesById);
router.put('/:id', controller.updateTuitionFees);
router.delete('/:id', controller.deleteTuitionFees);

module.exports = router;
