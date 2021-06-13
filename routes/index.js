const express = require('express');
const router = express.Router();
const gadgetoutController = require('../controllers/gadgetController');

router.get('/GadgetOut',gadgetoutController.getGadget); // get semua data
router.get('/GadgetOut/:id', gadgetoutController.getGadget); // get by id
router.get('/rekomendasi', gadgetoutController.getRecommendation); // get untuk rekomendasi
router.get('/pencarian', gadgetoutController.getAdvancedsearch); // get search by split search
router.get('/filter', gadgetoutController.getFilter); // get search by filter

module.exports = router;