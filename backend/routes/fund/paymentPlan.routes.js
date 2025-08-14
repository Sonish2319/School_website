const express = require('express');
const router = express.Router();
const controller = require('../../controllers/fund/paymentPlan.controller');

router.post('/', controller.createPaymentPlan);
router.get('/', controller.getAllPaymentPlans);
router.get('/:id', controller.getPaymentPlanById);
router.put('/:id', controller.updatePaymentPlan);
router.delete('/:id', controller.deletePaymentPlan);

module.exports = router;
