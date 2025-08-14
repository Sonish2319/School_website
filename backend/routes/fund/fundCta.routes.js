const express = require('express');
const router = express.Router();
const upload = require('../../middleware/upload');
const controller = require('../../controllers/fund/fundCta.controller');

router.post('/', upload.single('qrimage'), controller.createFundCta);
router.get('/', controller.getAllFundCtas);
router.get('/:id', controller.getFundCtaById);
router.put('/:id', upload.single('qrimage'), controller.updateFundCta);
router.delete('/:id', controller.deleteFundCta);

module.exports = router;
