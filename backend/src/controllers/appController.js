const UsuarioRepository = require('../repositories/usuarioRepository');

const appController = {
  // Registrar un usuario
  registrarUsuario: (req, res) => {
    const { nombre, apellido, correo, contrasena, direccion, telefono, fechaNacimiento, genero, estadoCivil, rolId } = req.body;
    const nuevoUsuario = { nombre, apellido, correo, contrasena, direccion, telefono, fechaNacimiento, genero, estadoCivil, rolId };

    UsuarioRepository.crearUsuario(nuevoUsuario, (err, result) => {
      if (err) {
        console.error('Error al registrar el usuario:', err);
        return res.status(500).send('Error en el servidor');
      }
      res.status(200).send({ message: 'Usuario registrado correctamente' });
    });
  },

  // Obtener todos los usuarios
  obtenerUsuarios: (req, res) => {
    UsuarioRepository.obtenerUsuarios((err, results) => {
      if (err) {
        console.error('Error al obtener los usuarios:', err);
        return res.status(500).send('Error en el servidor');
      }
      res.status(200).send({ usuarios: results });
    });
  },

  // Obtener un usuario por ID
  obtenerUsuarioPorId: (req, res) => {
    const { id } = req.params;
    UsuarioRepository.obtenerUsuarioPorId(id, (err, usuario) => {
      if (err) {
        console.error('Error al obtener el usuario:', err);
        return res.status(500).send('Error al obtener el usuario');
      }
      if (usuario) {
        res.status(200).send(usuario);
      } else {
        res.status(404).send({ message: 'Usuario no encontrado' });
      }
    });
  },

  // Eliminar un usuario
  eliminarUsuario: (req, res) => {
    const { id } = req.params;
    UsuarioRepository.eliminarUsuario(id, (err, result) => {
      if (err) {
        console.error('Error al eliminar el usuario:', err);
        return res.status(500).send('Error al eliminar el usuario');
      }
      if (result.affectedRows > 0) {
        res.status(200).send({ message: 'Usuario eliminado correctamente' });
      } else {
        res.status(404).send('Usuario no encontrado');
      }
    });
  },

  // Actualizar un usuario
  actualizarUsuario: (req, res) => {
    const { id } = req.params;
    const { nombre, apellido, correo, contrasena, direccion, telefono, fechaNacimiento, genero, estadoCivil, rolId } = req.body;
    const usuario = { id, nombre, apellido, correo, contrasena, direccion, telefono, fechaNacimiento, genero, estadoCivil, rolId };

    UsuarioRepository.actualizarUsuario(usuario, (err, result) => {
      if (err) {
        console.error('Error al actualizar el usuario:', err);
        return res.status(500).send('Error en el servidor');
      }
      if (result.affectedRows > 0) {
        res.status(200).send({ message: 'Usuario actualizado correctamente' });
      } else {
        res.status(404).send('Usuario no encontrado');
      }
    });
  }
};

module.exports = appController;
