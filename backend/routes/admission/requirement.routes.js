const express = require('express');
const router = express.Router();
const controller = require('../../controllers/admission/requirement.controller');

router.post('/', controller.createRequirement);
router.get('/', controller.getAllRequirements);
router.get('/:id', controller.getRequirementById);
router.put('/:id', controller.updateRequirement);
router.delete('/:id', controller.deleteRequirement);

module.exports = router;
