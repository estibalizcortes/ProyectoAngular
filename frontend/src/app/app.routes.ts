  import { RouterModule, Routes } from '@angular/router';
  import { NgModule } from '@angular/core';
  import { FormularioEstibalizComponent } from './formulario-estibaliz/formulario-estibaliz.component';
  import { FormularioPacoComponent } from './formulario-paco/formulario-paco.component';
  import { FormularioDavidComponent } from './formulario-david/formulario-david.component';
  import { DirectivaComponent } from './directiva/directiva.component';


  export const routes: Routes = [
    { path: 'formularioEstibaliz', component: FormularioEstibalizComponent },
    { path: 'formularioPaco', component: FormularioPacoComponent},
    { path: 'formularioDavid', component: FormularioDavidComponent},
    { path: 'directivas', component: DirectivaComponent},
    { path: '**', redirectTo: ''}
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

  export class AppRoutingModule {}
