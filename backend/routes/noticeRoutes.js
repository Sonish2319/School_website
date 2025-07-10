const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const controller = require('../controllers/noticeController');

router.post('/', upload.single('file'), controller.createNotice);

router.put('/:id', upload.single('file'), controller.updateNotice);
router.get('/', controller.getAllNotices);
router.get('/:id', controller.getNoticeById);
router.delete('/:id', controller.deleteNotice);

module.exports = router;
