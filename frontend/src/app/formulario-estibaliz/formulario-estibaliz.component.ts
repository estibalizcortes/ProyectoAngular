import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-formulario-estibaliz',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './formulario-estibaliz.component.html',
  styleUrl: './formulario-estibaliz.component.css'
})

export class FormularioEstibalizComponent {
  title = 'Formulario de Registro';

  //Esta variable la declaro aquí para verificar si se proporciona un id y habilitar el botón.
  userId: string = '';

  private apiUrl = 'http://localhost:3000/api/usuarios'; // Ruta del backend

  // VALIDACIONES
  mensajeErrorDireccion = '';
  validarDireccion() { // Validar que la dirección no esté vacía
    if (this.persona.direccion.trim() === '') {
      this.mensajeErrorDireccion = ('La dirección es obligatoria');
    } else {
      this.mensajeErrorDireccion = '';
    }
  }
  mensajeErrorCorreo = '';
  validarCorreo() {
    const correo = this.persona.correo;
    if (!correo.includes('@') || (!correo.endsWith('.com') && !correo.endsWith('.es'))) {
      this.mensajeErrorCorreo = 'El correo debe contener "@" y terminar en ".com" o ".es".';
    } else {
      this.mensajeErrorCorreo = '';
    }
  }
  mensajeErrorContrasena = '';
  validarContrasena() {
    if (this.persona.contrasena !== this.persona.confirmarContrasena) {
      this.mensajeErrorContrasena = 'Las contraseñas no coinciden.';
    } else {
      this.mensajeErrorContrasena = '';
    }
  }

  persona = {
    nombre: '',
    apellido: '',
    correo: '',
    contrasena: '',
    confirmarContrasena: '',
    direccion: '',
    telefono: '',
    fechaNacimiento: '',
    genero: '',
    estadoCivil: '',
    rolId: ''
  }
  roles = [
    { id: '1', nombre: 'Usuario' },
    { id: '2', nombre: 'Administrador' },
    { id: '3', nombre: 'Invitado' }
  ];
  constructor(private http: HttpClient) { }


  // ENVIAR DATOS AL SERVIDOR (BACKEND)
  enviarDatos() {
    console.log(this.persona); //muestra por pantalla los datos que va a enviar al servidor
    console.log('Rol seleccionado:', this.persona.rolId);

    this.validarDireccion(); // Validar que la dirección no esté vacía
    this.validarCorreo(); // Validar que el correo sea correcto
    this.validarContrasena(); // Validar que las contraseñas coincidan

    if (this.mensajeErrorDireccion || this.mensajeErrorCorreo || this.mensajeErrorContrasena) {
      console.error('Hay errores en el formulario, corrígelos antes de enviar.');
      return;
    }

    this.http.post('http://localhost:3000/api/registro', this.persona).subscribe(
      response => {
        console.log('Datos enviados con éxito', response);
        alert('Usuario registrado correctamente');
      },
      error => {
        console.error('Error al enviar datos', error);
      }
    );
  }
  mensaje = '';

  private apiGetUsersUrl = 'http://localhost:3000/api/usuarios';
  usuarios: any[] = []; // Almacenar la lista de usuarios registrados en el backend

  // Obtener los usuarios registrados en el backend
  obtenerUsuarios() {
    this.http.get(this.apiGetUsersUrl).subscribe(
      (response: any) => {
        console.log('Usuarios obtenidos con éxito', response);
        this.usuarios = response.usuarios;
      },
      error => {
        console.error('Error al obtener usuarios', error);
      }
    );
  }

  eliminarUsuario() {
    if (this.userId) {
      this.http.delete(`${this.apiUrl}/${this.userId}`).subscribe(
        response => {
          console.log('Usuario eliminado correctamente', response);
          alert('Usuario eliminado correctamente');
          this.userId = '';
        },
        error => {
          console.error('Error al eliminar el usuario', error);
          alert('Error al eliminar el usuario');
        }
      );
    } else {
      console.error('Se debe proporcionar un ID de usuario válido');
    }
  }

//Método para verificar si el id que se añade es un número para así habilitar el boton.
isUserIdValid(): boolean {
  return /^[0-9]+$/.test(this.userId);
}
}

