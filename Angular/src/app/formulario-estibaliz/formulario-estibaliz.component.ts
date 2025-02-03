import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
  title= 'Formulario de Registro';
  persona ={
    nombre: '',
    apellido: '',
    correo: '',
    contrasena: '',
    confirmarContrasena: '',
    direccion: '',
    telefono: '',
    fechaNacimiento: '',
    genero: '',
    estadoCivil: '' 
  }
  constructor() { }

  enviarDatos(){
    console.log(this.persona);
  }
}
