const express = require('express');
const router = express.Router();
const galleryUpload = require('../middleware/galleryUpload'); // new gallery-specific multer
const upload = require('../middleware/upload'); // your global upload, for other modules
const controller = require('../controllers/galleryController');

// Use galleryUpload for photos, keeps them under /uploads/photos/
router.post('/photo', galleryUpload.array('files', 10), controller.createPhoto);

// Videos/audio use URL only, no upload needed
router.post('/:type', controller.createMedia);

router.get('/', controller.getAllGalleryItems);
// router.get('/:id', controller.getGalleryItemById);

// On update, photo files uploaded with galleryUpload again
router.put('/:id', galleryUpload.array('files', 10), controller.updateGalleryItem);

router.delete('/:id', controller.deleteGalleryItem);

module.exports = router;
