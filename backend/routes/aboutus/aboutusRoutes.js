// const express = require('express');
// const router = express.Router();
// const upload = require('../../middleware/upload');
// const controller = require('../../controllers/aboutusController');

// // POST multiple images under the field name 'images', max 5 files
// // router.post('/', upload.array('image', 5), controller.createAboutUs);

// router.post('/', 
//     upload.array('image', 5), // multer processes files first
//     controller.createAboutUs
//   );
  

// // GET all about us entries
// router.get('/', controller.getAllAboutUs);

// // GET one about us entry by id
// router.get('/:id', controller.getAboutUsById);

// // PUT update with single image upload under 'image' field
// // router.put('/:id', upload.single('image'), controller.updateAboutUs);

// router.put('/:id', 
//   upload.array('image', 5), // multer processes files first
//   controller.updateAboutUs
// );

// // DELETE about us entry by id
// router.delete('/:id', controller.deleteAboutUs);

// module.exports = router;

// routes/aboutus/aboutus.routes.js
const express = require('express');
const router = express.Router();
const upload = require('../../middleware/upload');
const controller = require('../../controllers/aboutus/aboutusController');

router.post('/', upload.array('image', 5), controller.createAboutUs);
router.get('/', controller.getAllAboutUs);
router.get('/:id', controller.getAboutUsById);
router.put('/:id', upload.array('image', 5), controller.updateAboutUs);

module.exports = router;

