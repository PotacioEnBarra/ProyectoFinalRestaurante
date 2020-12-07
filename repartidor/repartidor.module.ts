import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevoRepartidorComponent } from './nuevo-repartidor/nuevo-repartidor.component';
import { ListadoRepartidorComponent } from './listado-repartidor/listado-repartidor.component';
import { FormsModule } from '@angular/forms';
import { RepartidorService } from './repartidor.service';



@NgModule({
  declarations: [NuevoRepartidorComponent, ListadoRepartidorComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    RepartidorService
  ]
})
export class RepartidorModule { }
