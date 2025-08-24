// routes/aboutus/statistics.routes.js
const express = require('express');
const router = express.Router();
const controller = require('../../controllers/aboutus/statistics.controller');

router.post('/', controller.createStatistic);
router.get('/', controller.getAllStatistics);
router.get('/:id', controller.getStatisticById);
router.put('/:id', controller.updateStatistic);
router.delete('/:id', controller.deleteStatistic);


module.exports = router;
