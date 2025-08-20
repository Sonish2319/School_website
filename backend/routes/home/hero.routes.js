const express = require('express');
const router = express.Router();
const upload = require('../../middleware/upload');
const controller = require('../../controllers/home/hero.controller');

router.post('/', upload.single('hero_image'), controller.createHeroHome);
router.get('/', controller.getAllHeroHome);
router.get('/:id', controller.getHeroHomeById);
router.put('/:id', upload.single('hero_image'), controller.updateHeroHome);
router.delete('/:id', controller.deleteHeroHome);

module.exports = router;
