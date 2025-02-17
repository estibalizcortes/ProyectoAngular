import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-formulario-estibaliz',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-estibaliz.component.html',
  styleUrl: './formulario-estibaliz.component.css'
})
export class FormularioEstibalizComponent {
  validarCorreo() {
    let correo = this.persona.correo;
    if (correo.indexOf('@') === -1 || !correo.endsWith('.com') || !correo.endsWith('.es')) {
      console.error('El correo no es válido, debe tener un @ y acabar en .com / .es');
    }
  }
  validarDireccion() {
    if (!this.persona.direccion) {
      console.error('La dirección es obligatoria');
    }
  }
  restaurarBoton() {
    const boton = document.querySelector('button');
    if (boton) {
      boton.style.width = 'auto';
      boton.style.height = 'auto';
    }
  }
  agrandarBoton() {
    const boton = document.getElementById("botonEnviar");
    if (boton) {
      boton.style.width = '200px';
      boton.style.height = '100px';
    }
  }

  reducirBoton() {
    const boton = document.getElementById("botonEnviar");
    if (boton) {
      boton.style.width = 'auto';
      boton.style.height = 'auto';
    }
  }

  title = 'Formulario de Registro';
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
    rolId: 2 //por defecto sera usuario
  }

  mensaje = ''; // Para mostrar mensajes al usuario
  private apiUrl = 'http://localhost:3000/api/usuarios'; // Ruta del backend
  private apiGetUsersUrl = 'http://localhost:3000/api/usuarios';
  usuarios: any[] = []; // Almacena la lista de usuarios registrados

  constructor(private http: HttpClient) {
    this.obtenerUsuarios(); // Cargar usuarios al iniciar
  }
  obtenerUsuarios() {
    this.http.get(this.apiGetUsersUrl).subscribe(
      (data: any) => {
        this.usuarios = data; // Guardar usuarios en la lista
      },
      (error) => {
        console.error('Error al obtener usuarios', error);
      }
    );
  }

  enviarDatos() {
    console.log(this.persona); //muestra por pantalla los datos que va a enviar al servidor

    // Verificar que las contraseñas coincidan antes de enviar
    if (this.persona.contrasena !== this.persona.confirmarContrasena) {
      this.mensaje = 'Las contraseñas no coinciden.';
      return;
    }

    this.http.post(this.apiUrl, this.persona).subscribe(
      (response) => {
        this.mensaje = 'Usuario registrado correctamente';
        alert('Usuario registrado');

        // Actualizar la lista de usuarios después del registro
        this.obtenerUsuarios();

        // Limpiar formulario después del registro
        this.persona = {
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
          rolId: 2
        };
      },
      (error) => {
        console.error('Error en el registro de usuario', error);
      }
    );
  }
}
