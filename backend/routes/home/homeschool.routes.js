const express = require('express');
const router = express.Router();
const upload = require('../../middleware/upload');
const controller = require('../../controllers/gallery/hero.controller');

router.post('/', upload.single('back_image'), controller.createHeroGallery);
router.get('/', controller.getAllHeroGallery);
router.get('/:id', controller.getHeroGalleryById);
router.put('/:id', upload.single('back_image'), controller.updateHeroGallery);
router.delete('/:id', controller.deleteHeroGallery);

module.exports = router;
