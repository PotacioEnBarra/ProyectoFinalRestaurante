import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevoAdministradorComponent } from './nuevo-administrador/nuevo-administrador.component';
import { ListadoAdministradorComponent } from './listado-administrador/listado-administrador.component';
import { AdministradorService } from './administrador.service';



@NgModule({
  declarations: [NuevoAdministradorComponent, ListadoAdministradorComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers:[
    AdministradorService
  ]
})
export class AdministradorModule { }
