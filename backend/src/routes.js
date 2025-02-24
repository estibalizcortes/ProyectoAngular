const express = require('express');
const appController = require('./controllers/appController');

const router = express.Router();

router.post('/registro', appController.registrarUsuario); // Registrar un usuario
router.get('/usuarios', appController.obtenerUsuarios); // Obtener todos los usuarios
router.get('/usuarios/:id', appController.obtenerUsuarioPorId); // Obtener un usuario por ID
router.put('/usuarios/:id', appController.actualizarUsuario); // Actualizar un usuario
router.delete('/usuarios/:id', appController.eliminarUsuario); // Eliminar un usuario

module.exports = router;
