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
    },

    eliminarUsuario: (req, res) => {
        const { id } = req.params;

        UsuarioRepository.eliminarUsuario(id, (err, result) => {
            if (err) {
                console.error('Error al eliminar usuario:', err);
                return res.status(500).send('Error al eliminar el usuario');
            }

            if (result.affectedRows === 0) {
                return res.status(404).send({ message: 'Usuario no encontrado' });
            }

            res.send({ message: 'Usuario eliminado correctamente' });
        });
    }

};

module.exports = appController;
