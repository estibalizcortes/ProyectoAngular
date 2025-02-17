/*
COMANDO PARA COMPROBAR QUE FUNCIONA: 
  node src/server.js
ESTRUCUTRA DE BACKEND:
  backend/
  │── src/
  │   │── controllers/
  │   │   └── appController.js       # Controlador general
  │   │── models/
  │   │   ├── Usuario.js             # Modelo Usuario
  │   │   ├── Rol.js                 # Modelo Rol
  │   │── repositories/
  │   │   ├── usuarioRepository.js   # Repositorio Usuario
  │   │   ├── rolRepository.js       # Repositorio Rol
  │   │── services/
  │   │   └── appService.js          # Servicio general
  │   │── routes.js                  # Rutas para API
  │   └── server.js                  # Punto de entrada del backend
  │── .env                           # Variables de entorno
  │── package.json                    # Configuración Node.js

*/
require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Configuración de MySQL dentro de server.js
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

// Conectar a MySQL
db.connect((err) => {
  if (err) {
    console.error('Error al conectar a MySQL:', err);
    return;
  }
  console.log('Conectado a MySQL');
});

// Ruta para registrar un usuario
app.post('/api/usuarios', async (req, res) => {
  const { nombre, apellido, correo, contrasena, direccion, telefono, fechaNacimiento, genero, estadoCivil, rolId } = req.body;

  if (!nombre || !apellido || !correo || !contrasena || !rolId) {
    return res.status(400).json({ error: 'Faltan datos obligatorios' });
  }

  try {
    const hashedPassword = await bcrypt.hash(contrasena, 10);
    const sql = `INSERT INTO usuarios (nombre, apellido, correo, contrasena, direccion, telefono, fecha_nacimiento, genero, estado_civil, rol_id) 
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    db.query(sql, [nombre, apellido, correo, hashedPassword, direccion, telefono, fechaNacimiento, genero, estadoCivil, rolId], (err, result) => {
      if (err) {
        console.error('Error al registrar usuario:', err);
        return res.status(500).json({ error: 'Error en el servidor' });
      }
      res.json({ message: 'Usuario registrado con éxito', id: result.insertId });
    });

  } catch (error) {
    console.error('Error interno:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Ruta para obtener todos los usuarios
app.get('/api/usuarios', (req, res) => {
  const sql = "SELECT * FROM usuarios";
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error al obtener usuarios:', err);
      return res.status(500).json({ error: 'Error en el servidor' });
    }
    res.json(results);
  });
});

// Ruta para obtener roles
app.get('/api/roles', (req, res) => {
  const sql = "SELECT * FROM roles";
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error al obtener roles:', err);
      return res.status(500).json({ error: 'Error en el servidor' });
    }
    res.json(results);
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
