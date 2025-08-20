const express = require('express');
const router = express.Router();
const upload = require('../../middleware/upload');
const controller = require('../../controllers/home/voice.controller');

router.post('/', upload.single('image'), controller.createHeroHomeVoice);
router.get('/', controller.getAllHomeVoice);
router.get('/:id', controller.getHomeVoiceById);
router.put('/:id', upload.single('image'), controller.updateHomeVoice);
router.delete('/:id', controller.deleteHomeVoice);

module.exports = router;
