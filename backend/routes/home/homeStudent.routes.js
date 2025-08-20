const express = require('express');
const router = express.Router();
const upload = require('../../middleware/upload');
const controller = require('../../controllers/home/student.controller');

router.post('/', upload.single('image'), controller.createHeroHomeStudent);
router.get('/', controller.getAllHomeStudent);
router.get('/:id', controller.getHomeStudentById);
router.put('/:id', upload.single('image'), controller.updateHomeStudent);
router.delete('/:id', controller.deleteHomeStudent);

module.exports = router;
