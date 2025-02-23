-- Crear la base de datos si no existe
CREATE DATABASE IF NOT EXISTS proyectoangular;
USE proyectoangular;

-- Crear la tabla de roles
CREATE TABLE IF NOT EXISTS roles (
    id INT AUTO_INCREMENT PRIMARY KEY, 
    nombre VARCHAR(50) NOT NULL UNIQUE
);

-- Insertar roles si no existen
INSERT INTO roles (id, nombre) VALUES (1, 'Usuario');
INSERT INTO roles (id, nombre) VALUES (2, 'Administrador');
INSERT INTO roles (id, nombre) VALUES (3, 'Invitado');

-- Crear la tabla de usuarios
CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    correo VARCHAR(150) NOT NULL UNIQUE,
    contrasena VARCHAR(255) NOT NULL,
    direccion VARCHAR(255),
    telefono VARCHAR(20),
    fecha_nacimiento DATE,
    genero ENUM('masculino', 'femenino', 'otro'),
    estado_civil ENUM('soltero', 'casado', 'divorciado', 'viudo'),
    rol_id INT NOT NULL, 
    FOREIGN KEY (rol_id) REFERENCES roles(id) ON DELETE CASCADE
);
