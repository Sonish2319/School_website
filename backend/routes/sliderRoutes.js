const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const controller = require('../controllers/sliderController');

router.post('/', upload.array('images', 5), controller.createSlider);
router.get('/', controller.getAllSliders);
router.get('/:id', controller.getSliderById);
router.put('/:id', upload.array('images', 5), controller.updateSlider);
router.delete('/:id', controller.deleteSlider);

module.exports = router;
