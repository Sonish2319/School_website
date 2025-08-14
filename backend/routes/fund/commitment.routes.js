const express = require('express');
const router = express.Router();
const controller = require('../../controllers/fund/commitment.controller');

router.post('/', controller.createCommitment);
router.get('/', controller.getAllCommitments);
router.get('/:id', controller.getCommitmentById);
router.put('/:id', controller.updateCommitment);
router.delete('/:id', controller.deleteCommitment);

module.exports = router;
