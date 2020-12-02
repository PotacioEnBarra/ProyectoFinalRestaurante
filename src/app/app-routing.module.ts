import { NuevoAdministradorComponent } from './modules/administrador/nuevo-administrador/nuevo-administrador.component';
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
  { path: 'reguistro-administrador', component: NuevoAdministradorComponent},
  { path: '', component: LoginComponent},
  { path: 'login', loadChildren: () => import('./autenticacion/login/login.module').then(m => m.LoginModule) },
  { path: 'registro', loadChildren: () => import('./autenticacion/registro/registro.module').then(m => m.RegistroModule) },
  { path: 'login', loadChildren: () => import('./autenticacion/login/login.module').then(m => m.LoginModule) },
  { path: 'registro', loadChildren: () => import('./autenticacion/registro/registro.module').then(m => m.RegistroModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
