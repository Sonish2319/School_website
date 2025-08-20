const express = require('express');
const router = express.Router();
const upload = require('../../middleware/upload');
const controller = require('../../controllers/home/school.controller');

router.post('/', upload.single('image'), controller.createHeroHomeSchool);
router.get('/', controller.getAllHomeSchool);
router.get('/:id', controller.getHomeSchoolById);
router.put('/:id', upload.single('image'), controller.updateHomeSchool);
router.delete('/:id', controller.deleteHomeSchool);

module.exports = router;
