import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-david',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formulario-david.component.html',
  styleUrl: './formulario-david.component.css'
})
export class FormularioDavidComponent {
  
  formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      dni: ['', [Validators.required, Validators.pattern(/^[0-9]{8}[A-Za-z]$/)]],
      correo: ['', [Validators.required, Validators.email]],
      direccion: [''],
      telefono: ['', [Validators.required, Validators.pattern(/^[0-9]{9}$/)]],
      genero: ['', Validators.required]
    });
  }

  validarFormulario() {
    if (this.formulario.valid) {
      this.enviarDatos();
      this.formulario.reset();
    } else {
      console.log('Error al registrar alumno');
    }
  }

  enviarDatos() {
    console.log("Alumno registrado correctamente", this.formulario.value);
  }
}
