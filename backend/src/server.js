
/*
COMANDO PARA LEVANTAR EL SERVIDOR: 
  node src/server.js

ESTRUCUTRA DE BACKEND:
  backend/
  │── src/
  │   │── controllers/
  │   │   └── appController.js        
  │   │── models/
  │   │   ├── Usuario.js              
  │   │   ├── Rol.js                  
  │   │── repositories/
  │   │   ├── usuarioRepository.js    
  │   │   ├── rolRepository.js        
  │   │── services/
  │   │   └── appService.js           
  │   │── routes.js                   
  │   └── server.js                   Punto de entrada del backend y configuracion general del backend para la aplicación de Angular.
  │── .env                            Variables de entorno
  └── package.json                    Configuración Node.js

DEPENDENCIAS INSTALADAS:
  npm init -y (incializar proyecto Node.js)
  npm install express  (Framework web para crear el backend)
  npm install mysql2  (Driver para MySQL)
  npm install dotenv  (Configurar variables de entorno)
  npm install cors  (Permite peticiones desde cualquier frontend)
  npm install body-parser (Para los datos que se envían al backend a través de formularios)
*/
const db = require('./services/appService');
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api', routes);

app.get('/api/usuarios', (req, res) => {
  const sql = 'SELECT * FROM usuarios';
  db.query(sql, (err, results) => {
      if (err) {
          console.error('Error al obtener usuarios:', err); // Muestra el error en la consola
          return res.status(500).json({ error: 'Error al obtener usuarios' });
      }
      res.json({ usuarios: results });
  });
});

// Ruta para obtener un usuario por su ID
app.get('/api/usuarios/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'SELECT * FROM usuarios WHERE id = ?';
  db.query(sql, [id], (err, results) => {
    if (err) {
      console.error('Error al obtener el usuario:', err);
      return res.status(500).send('Error al obtener el usuario');
    }
    if (results.length > 0) {
      res.json(results[0]);  // Devuelve solo el primer usuario encontrado
    } else {
      res.status(404).send('Usuario no encontrado');
    }
  });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

