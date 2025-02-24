const db = require('../services/appService');

class RolRepository {
    static obtenerRoles(callback) {
        const sql = "SELECT * FROM roles";
        db.query(sql, callback);
    }
}

module.exports = RolRepository;
