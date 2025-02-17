class Usuario {
    constructor(id, nombre, apellido, correo, contrasena, direccion, telefono, fechaNacimiento, genero, estadoCivil, rolId) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.contrasena = contrasena;
        this.direccion = direccion;
        this.telefono = telefono;
        this.fechaNacimiento = fechaNacimiento;
        this.genero = genero;
        this.estadoCivil = estadoCivil;
        this.rolId = rolId;
    }
}

module.exports = Usuario;
