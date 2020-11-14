import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NuevoProductoComponent } from './modules/productos/nuevo-producto/nuevo-producto.component';
import { RegistrarRepartidorComponent } from './modules/repartidor/registrar-repartidor/registrar-repartidor.component';
import { RegistroUsuarioComponent } from './modules/usuario/registro-usuario/registro-usuario.component';

const routes: Routes = [
  { path: 'registrar-repartidor', component: RegistrarRepartidorComponent},
  { path: 'nuevo-producto', component: NuevoProductoComponent},
  { path: 'registro-usuario', component: RegistroUsuarioComponent},
  { path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
