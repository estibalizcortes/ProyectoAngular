const AppService = require('../services/appService');

class AppController {
  static registrarUsuario(req, res) {
    AppService.registrarUsuario(req.body, (error, result) => {
      if (error) {
        console.error('Error al registrar usuario:', error);
        return res.status(500).json({ error: 'Error en el servidor' });
      }
      res.json({ message: 'Usuario registrado con éxito', id: result.insertId });
    });
  }

  static obtenerUsuarios(req, res) {
    AppService.obtenerUsuarios((error, results) => {
      if (error) {
        console.error('Error al obtener usuarios:', error);
        return res.status(500).json({ error: 'Error en el servidor' });
      }
      res.json(results);
    });
  }

  static obtenerRoles(req, res) {
    AppService.obtenerRoles((error, results) => {
      if (error) {
        console.error('Error al obtener roles:', error);
        return res.status(500).json({ error: 'Error en el servidor' });
      }
      res.json(results);
    });
  }
}

module.exports = AppController;
