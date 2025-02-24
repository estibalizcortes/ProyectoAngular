const db = require('../services/appService');

class UsuarioRepository {

    //Método para crear usuarios
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
            usuario.rolId // Asegurar que rolId se incluye en VALUES
        ], callback);
    }

    //Método para eliminar usuarios
    static eliminarUsuario(id, callback) {
        const sqlEliminar = "DELETE FROM usuarios WHERE id = ?";
        db.query(sqlEliminar, [id], callback);
    }
    
}



module.exports = UsuarioRepository;
