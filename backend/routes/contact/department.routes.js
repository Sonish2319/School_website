const express = require('express');
const router = express.Router();
const controller = require('../../controllers/contact/department.controller');

router.post('/', controller.createDepart);
router.get('/', controller.getAllDepart);
router.get('/:id', controller.getDepartById);
router.put('/:id', controller.updateDepart);
router.delete('/:id', controller.deleteDepart);

module.exports = router;
