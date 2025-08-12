// routes/aboutus/history.routes.js
const express = require('express');
const router = express.Router();
const controller = require('../../controllers/aboutus/history.controller');

router.post('/', controller.createHistory);
router.get('/', controller.getAllHistories);
router.get('/:id', controller.getHistoryById);
router.put('/:id', controller.updateHistory);

module.exports = router;
