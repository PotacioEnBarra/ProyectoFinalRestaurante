import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ProductosService } from './productos.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
import { ModificadoProductoComponent } from './modificado-producto/modificado-producto.component';
import { RegistroProductosComponent } from './registro-productos/registro-productos.component';

const routes: Routes = [

];

@NgModule({
  declarations: [ListadoProductosComponent, ModificadoProductoComponent, RegistroProductosComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ProductosService
  ]
})
export class ProductosModule { }
