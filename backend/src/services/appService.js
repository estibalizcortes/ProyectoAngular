const mysql = require('mysql2'); // Usamos mysql2 sin promesas
require('dotenv').config(); // Para cargar las variables de entorno desde .env

// Configuración de la base de datos
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Verificación de la conexión
db.connect((err) => {
  if (err) {
    console.error('Error al conectar a MySQL:', err);
    return;
  }
  console.log('Conexión a la base de datos establecida correctamente');
});

module.exports = db;
