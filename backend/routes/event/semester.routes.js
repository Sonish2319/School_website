const express = require('express');
const router = express.Router();
const controller = require('../../controllers/event/semester.controller');

router.post('/', controller.createSemester);
router.get('/', controller.getAllSemester);
router.get('/:id', controller.getSemesterById);
router.put('/:id', controller.updateSemester);
router.delete('/:id', controller.deleteSemester);

module.exports = router;
