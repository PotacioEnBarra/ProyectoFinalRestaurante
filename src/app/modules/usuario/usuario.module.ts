import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioService } from './usuario.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { ListadoUsuariosComponent } from './listado-usuarios/listado-usuarios.component';
import { ModificadousuarioComponent } from './modificadousuario/modificadousuario.component';

const routes: Routes = [

];

@NgModule({
  declarations: [RegistroUsuarioComponent,
  ListadoUsuariosComponent,
  RouterModule,
  ModificadousuarioComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    UsuarioService
  ]
})
export class UsuarioModule { }
