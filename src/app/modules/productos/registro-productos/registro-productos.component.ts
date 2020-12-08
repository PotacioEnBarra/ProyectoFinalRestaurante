import { Component, OnInit } from '@angular/core';
import { ProductosService } from './../productos.service';
import { Productos } from './../productos.model';

@Component({
  selector: 'app-registro-productos',
  templateUrl: './registro-productos.component.html',
  styleUrls: ['./registro-productos.component.css']
})
export class RegistroProductosComponent implements OnInit {

  productos: Productos = new Productos();
  submitted = false;

  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {
  }

  doCreateproducto(productos: Productos): void {
    this.productosService.createProductos(this.productos);
    this.submitted = true;
  }

  newProducto(): void {
    this.submitted = false;
  }
}
