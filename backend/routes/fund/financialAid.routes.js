const express = require('express');
const router = express.Router();
const controller = require('../../controllers/fund/financialAid.controller');

router.post('/', controller.createFinancialAid);
router.get('/', controller.getAllFinancialAid);
router.get('/:id', controller.getFinancialAidById);
router.put('/:id', controller.updateFinancialAid);
router.delete('/:id', controller.deleteFinancialAid);

module.exports = router;
