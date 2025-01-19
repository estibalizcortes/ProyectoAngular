import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';

  // Ejemplo directiva estructural para *ngFor     ESTIBALIZ
  frutas = ['Manzana', 'Naranja', 'Plátano'];

  // Ejemplo directiva de atributo para [ngStyle]    ESTIBALIZ
  textColor = 'blue';
  
   // Ejemplo  directiva de atributo para [style.fontSize]   DAVID
   fontSize = 20;

   // Ejeemplo directiva estructural para *ngFor     DAVID
   alumnos = ['Estibaliz Cortés', 'David García', 'Francisco José Fernándefz'];
}
