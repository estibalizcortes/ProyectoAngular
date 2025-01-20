import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  vistaActual: string = ' ';
  mostrarContenido(txtBtn: string): void {
    this.vistaActual = txtBtn;
    console.log(txtBtn);
  }
}
