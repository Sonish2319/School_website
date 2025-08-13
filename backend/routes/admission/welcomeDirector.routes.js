const express = require('express');
const router = express.Router();
const upload = require('../../middleware/upload');
const controller = require('../../controllers/admission/welcomeDirector.controller');

router.post('/', upload.single('director_image'), controller.createItem);
router.get('/', controller.getAllItems);
router.get('/:id', controller.getItemById);
router.put('/:id', upload.single('director_image'), controller.updateItem);
router.delete('/:id', controller.deleteItem);

module.exports = router;
