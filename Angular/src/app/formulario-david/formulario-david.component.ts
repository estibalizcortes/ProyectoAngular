import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-formulario-david',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './formulario-david.component.html',
  styleUrl: './formulario-david.component.css'
})
export class FormularioDavidComponent {
  persona = {
    nombre: '',
    apellido: '',
    dni: '',
    correo: '',
    direccion: '',
    telefono: '',
    genero: ''
  };

  validarFormulario(formulario: NgForm) {
    if (formulario.valid) {
      this.enviarDatos();
    } else {
      console.log('Error al registrar alumno');
    }
  }

  enviarDatos() {
    console.log("Alumno registrado correctamente", this.persona);
  }
}

