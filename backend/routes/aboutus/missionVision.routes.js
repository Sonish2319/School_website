// // routes/aboutus/missionVision.routes.js
// const express = require('express');
// const router = express.Router();
// const upload = require('../../middleware/upload');
// const controller = require('../../controllers/aboutus/missionVision.controller');

// router.post('/', upload.fields([{ name: 'mission_icon', maxCount: 1 }, { name: 'vision_icon', maxCount: 1 }]), controller.createMissionVision);
// router.get('/', controller.getAll);
// router.get('/:id', controller.getById);
// router.put('/:id', upload.fields([{ name: 'mission_icon', maxCount: 1 }, { name: 'vision_icon', maxCount: 1 }]), controller.update);

// module.exports = router;


// routes/aboutus/missionVision.routes.js
const express = require('express');
const router = express.Router();
const controller = require('../../controllers/aboutus/missionVision.controller');

router.post('/', controller.createMissionVision);
router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.put('/:id', controller.update);

module.exports = router;
