const UsuarioRepository = require('../repositories/usuarioRepository');
const RolRepository = require('../repositories/rolRepository');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');

class AppService {
  // Registrar un usuario
  static async registrarUsuario(datosUsuario, callback) {
    try {
      const hashedPassword = await bcrypt.hash(datosUsuario.contrasena, 10);
      const usuario = new Usuario(
        null,
        datosUsuario.nombre,
        datosUsuario.apellido,
        datosUsuario.correo,
        hashedPassword,
        datosUsuario.direccion,
        datosUsuario.telefono,
        datosUsuario.fechaNacimiento,
        datosUsuario.genero,
        datosUsuario.estadoCivil,
        datosUsuario.rolId
      );
      UsuarioRepository.crearUsuario(usuario, callback);
    } catch (error) {
      callback(error, null);
    }
  }

  // Obtener todos los usuarios
  static obtenerUsuarios(callback) {
    UsuarioRepository.obtenerUsuarios(callback);
  }

  // Obtener roles
  static obtenerRoles(callback) {
    RolRepository.obtenerRoles(callback);
  }
}

module.exports = AppService;
