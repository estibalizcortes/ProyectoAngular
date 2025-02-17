const express = require('express');
const AppController = require('./controllers/appController');

const router = express.Router();

// Rutas para usuarios
router.post('/usuarios', AppController.registrarUsuario);
router.get('/usuarios', AppController.obtenerUsuarios);

// Rutas para roles
router.get('/roles', AppController.obtenerRoles);

module.exports = router;
