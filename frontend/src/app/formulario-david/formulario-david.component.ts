import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-formulario-david',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './formulario-david.component.html',
  styleUrl: './formulario-david.component.css'
})
export class FormularioDavidComponent {
  
  formulario: FormGroup;

  //Esta variable la declaro aquí para verificar si se proporciona un id y habilitar el botón.
  userId: string = '';

  private apiUrl = 'http://localhost:3000/api/usuarios'; // Ruta del backend


  constructor(private fb: FormBuilder, private http: HttpClient) {
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
