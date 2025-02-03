import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directiva',
  imports: [CommonModule, FormsModule],
  templateUrl: './directiva.component.html',
  styleUrl: './directiva.component.css'
})
export class DirectivaComponent {
  title = 'Angular';


  // Ejemplo directiva estructural para *ngIf     PACO
  isVisible = true;
  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }


  // Ejemplo directiva estructural para *ngFor     ESTIBALIZ
  frutas = ['Manzana', 'Naranja', 'Plátano'];


  // Ejemplo directiva de atributo para [ngClass]    PACO
  isActive = false;
  toggleClass() {
    this.isActive = !this.isActive;
  }


  // Ejemplo directiva de atributo para [ngStyle]    ESTIBALIZ
  textColor = 'blue';
  
   // Ejemplo  directiva de atributo para [style.fontSize]   DAVID
   fontSize = 20;

   // Ejeemplo directiva estructural para *ngFor     DAVID
   alumnos = ['Estibaliz Cortés', 'David García', 'Francisco José Fernández'];
}
