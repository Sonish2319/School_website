const express = require('express');
const router = express.Router();
const controller = require('../../controllers/fund/fundingFAQ.controller');

router.post('/', controller.createFundingFAQ);
router.get('/', controller.getAllFundingFAQs);
router.get('/:id', controller.getFundingFAQById);
router.put('/:id', controller.updateFundingFAQ);
router.delete('/:id', controller.deleteFundingFAQ);

module.exports = router;
