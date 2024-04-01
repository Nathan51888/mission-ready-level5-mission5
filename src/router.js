const express = require('express');
const router = express.Router();
const { getStations } = require('./controller');

router.get('/get', getStations);

module.exports = router;
