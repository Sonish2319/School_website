const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const controller = require('../controllers/admissionController');

router.post(
    '/',
    upload.single('image'), // only 'image' is a file
    controller.createAdmission
  );
  
  // Same for update if image or icons are being updated
  router.put(
    '/:id',
    upload.single('image'),
    controller.createAdmission
  );

// router.post('/', upload.single('image'), controller.createAdmission);
router.get('/', controller.getAllAdmissions);
router.get('/:id', controller.getAdmissionById);
// router.put('/:id', upload.single('image'), controller.updateAdmission);
router.delete('/:id', controller.deleteAdmission);

module.exports = router;
