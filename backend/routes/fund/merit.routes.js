const express = require('express');
const router = express.Router();
const controller = require('../../controllers/fund/merit.controller');

router.post('/', controller.createScholarship);
router.get('/', controller.getAllScholarships);
router.get('/:id', controller.getScholarshipById);
router.put('/:id', controller.updateScholarship);
router.delete('/:id', controller.deleteScholarship);

module.exports = router;
