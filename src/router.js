const express = require('express');
const router = express.Router();
const { getStations, initStations } = require('./controller');

router.get('/get', getStations);
router.get('/init', initStations);

module.exports = router;
