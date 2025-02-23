# 📌 Proyecto Angular
Este es un proyecto desarrollado en **Angular y Node.js con MySQL**, dividido en frontend y backend.  
El backend maneja la lógica de la base de datos, mientras que el frontend proporciona una interfaz de usuario.



# 📌 Funcionalidades
El desarrollo del proyecto sigue un esquema semanal con las siguientes funcionalidades:
- **Semana 1**: Directivas estructurales y de atributo.
- **Semana 2**: Creación y reutilización de componentes.
- **Semana 3**: Eventos y formularios.
- **Semana 4**: Enrutamiento y Acceso a datos.



# 📌 Equipo del Proyecto
Este proyecto sigue la metodología **Scrum**, con los siguientes roles asignados:
- **Product Owner**:  
  - 🏆 **Ramón Javier Morales Pacheco**  
- **Equipo de Desarrollo**:  
  - 👨‍💻 **David García Vela**  
  - 👨‍💻 **Francisco José Fernández Álvarez**  
  - 👩‍💻 **Estíbaliz Cortes García**  



# 🎨 **FRONTEND - Aplicación Angular**
El frontend de la aplicación esta desarrollado con **Angular**, y se encarga de la interfaz de usuario.
## 🛠️ Tecnologías Utilizadas en el Frontend
- 🌐 Angular - Framework de frontend.
- 🎨 Bootstrap - Estilos y diseño.
- 📡 HttpClient - Conexión con la API REST.



# 🖥️ **BACKEND - Aplicación Node.js**
El backend de la aplicación esta desarrollado con **Node.js y MySQL**, se encarga de gestionar la lógica y la conexión con el servidor y la base de datos.
## 🛠️ Tecnologías Utilizadas en el Backend
- 🟢 Node.js - Entorno de ejecución JavaScript.
- ⚡ Express.js - Framework para manejar rutas y peticiones HTTP.
- 🗄️ MySQL - Base de datos relacional para gestionar usuarios y roles.
- 🌍 dotenv - Manejo de variables de entorno.
- 🔄 cors - Permitir solicitudes desde el frontend en Angular.
- 📦 body-parser - Parseo de datos JSON en las peticiones HTTP.



# 🚀 Instalación y Configuración del Proyecto
### 1️⃣ **Ejecutrar el servidor**
- cd backend
- npm install
- node src/server.js
- El backend estará en el puerto: http://localhost:3000 🌍

### 2️⃣ **Ejecutar el frontend**
- git clone https://github.com/estibalizcortes/ProyectoAngular.git
- cd frontend
- npm install
- ng serve
- Esto iniciará la aplicación en: http://localhost:4200 🌍



## ❓ Problemas y Soluciones
Si tienes problemas con la conexión a MySQL, asegúrate de:
- En XAMPP deben estar corriendo Apache y MySQL.
- Tener una base de datos que se llame "proyectoangular"
- Haber importado el archivo import.sql en la base de datos "proyectoangular"