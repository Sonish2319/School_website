const express = require('express');
const router = express.Router();
const upload = require('../../middleware/upload');
const controller = require('../../controllers/fund/heroFunding.controller');

router.post('/', upload.single('background_image'), controller.createHeroFunding);
router.get('/', controller.getAllHeroFunding);
router.get('/:id', controller.getHeroFundingById);
router.put('/:id', upload.single('background_image'), controller.updateHeroFunding);
router.delete('/:id', controller.deleteHeroFunding);

module.exports = router;
