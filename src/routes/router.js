const express = require('express');

const router = express.Router();

// controllers
const controller = require('../controllers/controller.js');

router.get('/', (req, res) => res.send('hello world!'));

module.exports = router;
