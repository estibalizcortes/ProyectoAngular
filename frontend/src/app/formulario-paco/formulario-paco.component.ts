import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-paco',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],  
  templateUrl: './formulario-paco.component.html',
  styleUrls: ['./formulario-paco.component.css']
})
export class FormularioPacoComponent {
  title = 'Formulario de Registro';
  color: string = 'black'; // Color inicial de las letras

  formulario: FormGroup;  // Declaramos un FormGroup

  constructor(private fb: FormBuilder) {
    // Inicializamos el formulario con FormBuilder y validadores
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(6)]],
      confirmarContrasena: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]{9}$')]],
      fechaNacimiento: ['', Validators.required],
      genero: ['', Validators.required],
      estadoCivil: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });  // Validación personalizada
  }

  // Validación personalizada para las contraseñas coincidentes
  passwordMatchValidator(formGroup: FormGroup) {
    const contrasena = formGroup.get('contrasena');
    const confirmarContrasena = formGroup.get('confirmarContrasena');
    if (contrasena?.value !== confirmarContrasena?.value) {
      confirmarContrasena?.setErrors({ passwordMismatch: true });
    } else {
      confirmarContrasena?.setErrors(null);
    }
    return null;
  }

  // De color a azul claro cuando el ratón pase por encima
  changeColor(event: any): void {
    this.color = '#ADD8E6';
  }

  // Volver al color negro cuando el ratón salga
  resetColor(event: any): void {
    this.color = 'black';
  }

  // Método para enviar los datos
  enviarDatos() {
    if (this.formulario.valid) {
      console.log("Formulario enviado:", this.formulario.value);
      this.formulario.reset();  // Reseteamos el formulario después de enviarlo
    } else {
      console.log('Error: El formulario no es válido');
    }
  }
}
