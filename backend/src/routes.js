const express = require('express');
const appController = require('./controllers/appController');

const router = express.Router();

router.post('/registro', appController.registrarUsuario);

module.exports = router;
