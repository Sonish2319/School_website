// routes/aboutus/hero.routes.js
const express = require('express');
const router = express.Router();
const upload = require('../../middleware/upload');
const controller = require('../../controllers/aboutus/hero.controller');

router.post('/', upload.single('image'), controller.createHero);
router.get('/', controller.getAllHeroes);
router.get('/:id', controller.getHeroById);
router.put('/:id', upload.single('image'), controller.updateHero);
router.delete('/:id', controller.deleteHero);

module.exports = router;
