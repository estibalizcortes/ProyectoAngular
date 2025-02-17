const db = require('../config/database');

class UsuarioRepository {
    static crearUsuario(usuario, callback) {
        const sql = `INSERT INTO usuarios (nombre, apellido, correo, contrasena, direccion, telefono, fecha_nacimiento, genero, estado_civil, rol_id) 
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        db.query(sql, Object.values(usuario), callback);
    }

    static obtenerUsuarios(callback) {
        const sql = "SELECT * FROM usuarios";
        db.query(sql, callback);
    }
}

module.exports = UsuarioRepository;
