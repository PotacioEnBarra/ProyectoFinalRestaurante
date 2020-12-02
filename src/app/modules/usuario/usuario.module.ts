import { UsuarioService } from './usuario.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { ListadoUsuariosComponent } from './listado-usuarios/listado-usuarios.component';



@NgModule({
  declarations: [RegistroUsuarioComponent, ListadoUsuariosComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    UsuarioService
  ]
})
export class UsuarioModule { }
