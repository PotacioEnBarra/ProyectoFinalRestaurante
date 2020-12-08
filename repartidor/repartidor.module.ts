import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevoRepartidorComponent } from './nuevo-repartidor/nuevo-repartidor.component';
import { ListadoRepartidorComponent } from './listado-repartidor/listado-repartidor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RepartidorService } from './repartidor.service';
import { ModificarRepartidorComponent } from './modificar-repartidor/modificar-repartidor.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    NuevoRepartidorComponent,
    ListadoRepartidorComponent,
    ModificarRepartidorComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    RepartidorService
  ]
})
export class RepartidorModule { }
