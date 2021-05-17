const express = require('express');
const router = express.Router();
const gadgetoutController = require('../controllers/gadgetController');

router.get('/GadgetOut',gadgetoutController.getGadget);
router.get('/GadgetOut/:id', gadgetoutController.getGadget);

module.exports = router;