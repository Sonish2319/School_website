// // routes/aboutus/coreValues.routes.js
// const express = require('express');
// const router = express.Router();
// const upload = require('../../middleware/upload');
// const controller = require('../../controllers/aboutus/coreValues.controller');

// router.post('/', upload.single('icon'), controller.createCoreValue);
// router.get('/', controller.getAllCoreValues);
// router.get('/:id', controller.getCoreValueById);
// router.put('/:id', upload.single('icon'), controller.updateCoreValue);

// module.exports = router;


// routes/aboutus/coreValues.routes.js
const express = require('express');
const router = express.Router();
const controller = require('../../controllers/aboutus/coreValues.controller');

router.post('/', controller.createCoreValue);
router.get('/', controller.getAllCoreValues);
router.get('/:id', controller.getCoreValueById);
router.put('/:id', controller.updateCoreValue);

module.exports = router;
