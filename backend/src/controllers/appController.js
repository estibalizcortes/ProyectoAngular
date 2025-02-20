const Usuario = require('../models/Usuario');
const UsuarioRepository = require('../repositories/usuarioRepository');

const appController = {
    registrarUsuario: (req, res) => {
        const { nombre, apellido, correo, contrasena, direccion, telefono, fechaNacimiento, genero, estadoCivil, rolId } = req.body;
        const nuevoUsuario = new Usuario(null, nombre, apellido, correo, contrasena, direccion, telefono, fechaNacimiento, genero, estadoCivil, rolId);

        UsuarioRepository.crearUsuario(nuevoUsuario, (err, result) => {
            if (err) {
                console.error('Error al registrarUsuario:', err);
                return res.status(500).send('Error en el servidor');
            }
            res.send({ message: 'Usuario registrado correctamente' });
        });
    }
};

module.exports = appController;
