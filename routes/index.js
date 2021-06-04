const express = require('express');
const router = express.Router();
const gadgetoutController = require('../controllers/gadgetController');

router.get('/GadgetOut',gadgetoutController.getGadget); // get semua data
router.get('/GadgetOut/:id', gadgetoutController.getGadget); // get by id
router.get('/GadgetOut/rekomendasi', gadgetoutController.getRecommendation); // get untuk rekomendasi
router.get('/GadgetOut/pencarian', gadgetoutController.getAdvancedsearch); // get search by filter

module.exports = router;