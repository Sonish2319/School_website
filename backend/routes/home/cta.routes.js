// routes/aboutus/cta.routes.js
const express = require('express');
const router = express.Router();
const controller = require('../../controllers/home/cta.controller');

router.post('/', controller.createCTA);
router.get('/', controller.getAllCTAs);
router.get('/:id', controller.getCTAById);
router.put('/:id', controller.updateCTA);
router.delete('/:id', controller.deleteCTA);

module.exports = router;
