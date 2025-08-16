const express = require('express');
const router = express.Router();
const controller = require('../../controllers/contact/faq.controller');

router.post('/', controller.createFaq);
router.get('/', controller.getAllFaqs);
router.get('/:id', controller.getFaqById);
router.put('/:id', controller.updateFaq);
router.delete('/:id', controller.deleteFaq);

module.exports = router;
