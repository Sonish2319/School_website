const express = require('express');
const router = express.Router();
const upload = require('../../middleware/upload');
const controller = require('../../controllers/home/gallery.controller');

router.post('/', upload.single('images'), controller.createHomeGallery);
router.get('/', controller.getAllHomeGallery);
router.get('/:id', controller.getHomeGalleryById);
router.put('/:id', upload.single('images'), controller.updateHomeGallery);
router.delete('/:id', controller.deleteHomeGallery);

module.exports = router;
