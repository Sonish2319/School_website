const express = require('express');
const router = express.Router();
const controller = require('../../controllers/fund/importantDates.controller');

router.post('/', controller.createImportantDate);
router.get('/', controller.getAllImportantDates);
router.get('/:id', controller.getImportantDateById);
router.put('/:id', controller.updateImportantDate);
router.delete('/:id', controller.deleteImportantDate);

module.exports = router;
