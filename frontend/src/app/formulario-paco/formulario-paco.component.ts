import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-formulario-paco',
  standalone: true, 
  imports: [FormsModule, CommonModule], 
  templateUrl: './formulario-paco.component.html',
  styleUrls: ['./formulario-paco.component.css']
})
export class FormularioPacoComponent {
  title = 'Formulario de Registro';
  userId: string = '';  // Input field for user ID

  private apiUrl = 'http://localhost:3000/api/usuarios'; // Backend API URL
  usuarios: any[] = [];  // Almacenar la lista de usuarios

  formData: any = {
    nombre: '',
    apellido: '',
    correo: '',
    contrasena: '',
    confirmarContrasena: '',
    direccion: '',
    telefono: '',
    fechaNacimiento: '',
    genero: 'masculino',
    estadoCivil: 'soltero'
  };

  constructor(private http: HttpClient) {}

  // Método para buscar usuario por ID
  obtenerUsuario() {
    if (this.userId.trim() !== '') {
      this.http.get<any>(`${this.apiUrl}/${this.userId}`).subscribe(
        (data) => {
          console.log(data); // Verificamos que los datos están llegando correctamente
          if (data && data.length > 0) {  // Asegúrate de que data no está vacío
            // Si se encuentra el usuario, rellenamos el formulario con los datos
            this.formData = {
              nombre: data[0].nombre,
              apellido: data[0].apellido,
              correo: data[0].correo,
              contrasena: data[0].contrasena,
              confirmarContrasena: data[0].contrasena, // Asumimos que la contraseña es la misma para confirmar
              direccion: data[0].direccion,
              telefono: data[0].telefono,
              fechaNacimiento: new Date(data[0].fecha_nacimiento).toISOString().split('T')[0],  // Formato de fecha ya que viene de una manera distinta a la de form
              genero: data[0].genero,
              estadoCivil: data[0].estado_civil,
              rolId: data[0].rol_id 
            };
          } else {
            alert('Usuario no encontrado');
          }
        },
        (error) => {
          console.error('Error al obtener el usuario:', error);
          alert('Error al obtener el usuario');
        }
      );
    } else {
      alert('Por favor, ingresa un ID');
    }
  }
  
  
  
  // Método para obtener todos los usuarios
  obtenerTodosUsuarios() {
    this.http.get<any>(this.apiUrl).subscribe(
      (data) => {
        this.usuarios = data.usuarios; // Suponemos que el backend devuelve una lista de usuarios
      },
      (error) => {
        console.error('Error al obtener los usuarios:', error);
      }
    );
  }

  // Método para actualizar los datos del usuario
  actualizarUsuario() {
    if (this.isFormValid()) {
      this.http.put<any>(`${this.apiUrl}/${this.userId}`, this.formData).subscribe(
        (response) => {
          alert('Usuario actualizado exitosamente');
        },
        (error) => {
          alert('Error al actualizar el usuario');
        }
      );
    } else {
      alert('Formulario inválido');
    }
  }

  // Método para eliminar un usuario// Método para eliminar un usuario
eliminarUsuario() {
  if (this.userId.trim() !== '') {
    this.http.delete<any>(`${this.apiUrl}/${this.userId}`).subscribe(
      (response) => {
        alert('Usuario eliminado exitosamente');
        // Después de eliminar, obtenemos todos los usuarios nuevamente para actualizar la lista
        this.obtenerTodosUsuarios(); // Actualiza la lista de usuarios
        this.resetForm(); // Reiniciar el formulario
      },
      (error) => {
        alert('Error al eliminar el usuario');
        console.error('Error al eliminar el usuario', error);
      }
    );
  } else {
    alert('Por favor, ingresa un ID para eliminar el usuario'); // No es necesario creo ya que los botones no se activan a no ser que se escriba un numero.
  }
}


  // Verificar si el ID de usuario es válido
  isUserIdValid() {
    return /^[0-9]+$/.test(this.userId); // Solo números
  }

  // Validar si el formulario es válido
  isFormValid() {
    return this.formData.nombre && this.formData.apellido && this.formData.correo &&
           this.formData.contrasena && this.formData.confirmarContrasena && this.formData.direccion &&
           this.formData.telefono && this.formData.fechaNacimiento && this.formData.genero && this.formData.estadoCivil;
  }

  // Resetear el formulario
  resetForm() {
    this.formData = {
      nombre: '',
      apellido: '',
      correo: '',
      contrasena: '',
      confirmarContrasena: '',
      direccion: '',
      telefono: '',
      fechaNacimiento: '',
      genero: 'masculino',
      estadoCivil: 'soltero'
    };
    this.userId = '';
  }
}
