const express = require('express');

const router = express.Router();

// controllers
const { getMessages, saveMessage } = require('../controllers/controller.js');

router.get('/', (req, res) => res.send('hello world!'));
router.get('/get', (req, res) => getMessages(req, res));
router.get('/send', (req, res) => saveMessage(req, res));

module.exports = router;
