const express = require('express');
const router = express.Router();
const upload = require('../../middleware/upload');
const controller = require('../../controllers/event/hero.controller');

router.post('/', upload.single('back_image'), controller.createHeroContact);
router.get('/', controller.getAllHeroContact);
router.get('/:id', controller.getHeroContactById);
router.put('/:id', upload.single('back_image'), controller.updateHeroContact);
router.delete('/:id', controller.deleteHeroContact);

module.exports = router;
