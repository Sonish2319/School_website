const express = require('express');
const router = express.Router();
const galleryUpload = require('../../middleware/galleryUpload');
const controller = require('../../controllers/gallery/galleryphoto.controller');

// Upload multiple images (limit 10 files max, adjust as needed)
router.post('/', galleryUpload.array('photos', 10), controller.createGalleryPhoto);
router.get('/', controller.getAllGalleryPhotos);
router.get('/:id', controller.getGalleryPhotoById);
router.put('/:id', galleryUpload.array('photos', 10), controller.updateGalleryPhoto);
router.delete('/:id', controller.deleteGalleryPhoto);

module.exports = router;
