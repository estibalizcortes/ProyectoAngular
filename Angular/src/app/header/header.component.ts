import { Component } from '@angular/core';
import { DirectivaComponent } from "../directiva/directiva.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormularioEstibalizComponent } from "../formulario-estibaliz/formulario-estibaliz.component";

@Component({
  selector: 'app-header',
  imports: [DirectivaComponent, CommonModule, FormsModule, FormularioEstibalizComponent],
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
