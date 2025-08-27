const express = require('express');
const router = express.Router();
const controller = require('../../controllers/home/hero.controller');

router.post('/', controller.createHeroHome);
router.get('/', controller.getAllHeroHome);
router.get('/:id', controller.getHeroHomeById);
router.put('/:id', controller.updateHeroHome);
router.delete('/:id', controller.deleteHeroHome);

module.exports = router;



