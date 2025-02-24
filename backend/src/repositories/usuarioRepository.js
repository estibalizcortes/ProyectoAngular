const db = require('../services/appService'); // Importa la conexión a la base de datos

class UsuarioRepository {
  // Crear usuario
  static crearUsuario(usuario, callback) {
    const sql = `INSERT INTO usuarios (nombre, apellido, correo, contrasena, direccion, telefono, fecha_nacimiento, genero, estado_civil, rol_id) 
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    db.query(sql, [
      usuario.nombre,
      usuario.apellido,
      usuario.correo,
      usuario.contrasena,
      usuario.direccion,
      usuario.telefono,
      usuario.fechaNacimiento,
      usuario.genero,
      usuario.estadoCivil,
      usuario.rolId
    ], callback); // Callback para manejar la respuesta
  }

  // Obtener todos los usuarios
  static obtenerUsuarios(callback) {
    const sql = 'SELECT id, nombre, apellido FROM usuarios'; // Solo los campos que queremos mostrar
    db.query(sql, callback); // Callback para manejar la respuesta
  }

  // Obtener usuario por ID
  static obtenerUsuarioPorId(id, callback) {
    const sql = 'SELECT * FROM usuarios WHERE id = ?';
    db.query(sql, [id], callback); // Callback para manejar la respuesta
  }

  // Actualizar usuario
  static actualizarUsuario(usuario, callback) {
    const sql = `UPDATE usuarios SET nombre = ?, apellido = ?, correo = ?, contrasena = ?, direccion = ?, telefono = ?, fecha_nacimiento = ?, genero = ?, estado_civil = ?, rol_id = ? 
                 WHERE id = ?`;
    db.query(sql, [
      usuario.nombre,
      usuario.apellido,
      usuario.correo,
      usuario.contrasena,
      usuario.direccion,
      usuario.telefono,
      usuario.fechaNacimiento,
      usuario.genero,
      usuario.estadoCivil,
      usuario.rolId,
      usuario.id
    ], callback); // Callback para manejar la respuesta
  }

  // Eliminar usuario
  static eliminarUsuario(id, callback) {
    const sql = 'DELETE FROM usuarios WHERE id = ?';
    db.query(sql, [id], callback); // Callback para manejar la respuesta
  }
}

module.exports = UsuarioRepository;
