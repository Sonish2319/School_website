// routes/aboutus/newsletter.routes.js
const express = require('express');
const router = express.Router();
const controller = require('../../controllers/aboutus/newsletter.controller');

router.post('/', controller.createNewsletter);
router.get('/', controller.getAllNewsletters);
router.get('/:id', controller.getNewsletterById);
router.put('/:id', controller.updateNewsletter);
router.delete('/:id', controller.deleteNewsletter);

module.exports = router;
