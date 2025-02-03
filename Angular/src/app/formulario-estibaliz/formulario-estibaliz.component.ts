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
