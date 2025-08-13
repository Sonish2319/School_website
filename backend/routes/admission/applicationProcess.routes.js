const express = require('express');
const router = express.Router();
const controller = require('../../controllers/admission/applicationProcess.controller');

router.post('/', controller.createItem);
router.get('/', controller.getAllItems);
router.get('/:id', controller.getItemById);
router.put('/:id', controller.updateItem);
router.delete('/:id', controller.deleteItem);

module.exports = router;
