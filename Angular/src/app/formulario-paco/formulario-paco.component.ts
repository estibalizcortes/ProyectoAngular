import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-paco',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-paco.component.html',
  styleUrls: ['./formulario-paco.component.css']
})
export class FormularioPacoComponent {
  title= 'Formulario de Registro';
  color: string = 'black'; // Color inicial de las letras

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
    estadoCivil: ''
  }

  constructor() { }

  // Cambiar el color a azul claro cuando el ratón pase por encima
  changeColor(event: any): void {
    this.color = '#ADD8E6'; // Azul clarito
  }

  // Volver al color negro cuando el ratón salga
  resetColor(event: any): void {
    this.color = 'black'; // Volver al negro
  }

  enviarDatos() {
    console.log(this.persona);
  }
}
