const express = require('express');
const router = express.Router();
const upload = require('../../middleware/upload');
const controller = require('../../controllers/home/image.controller');

router.post('/', upload.single('image'), controller.createImageHome);
router.get('/', controller.getAllImageHome);
router.get('/:id', controller.getImageHomeById);
router.put('/:id', upload.single('image'), controller.updateImageHome);
router.delete('/:id', controller.deleteImageHome);

module.exports = router;
