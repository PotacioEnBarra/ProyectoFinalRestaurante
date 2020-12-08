import { Productos } from './../productos.model';
import { Component, OnInit } from '@angular/core';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-modificado-producto',
  templateUrl: './modificado-producto.component.html',
  styleUrls: ['./modificado-producto.component.css']
})
export class ModificadoProductoComponent implements OnInit {

  productosId: string;
  productos: AngularFirestoreDocument<any>;
  objeto: Productos;
  conId = false;

  constructor(private actRoute: ActivatedRoute,
    private productosService: ProductosService,
    private route: Router) {
// this.clienteId = this.actRoute.snapshot.params.id;
}

async ngOnInit() {
  this.actRoute.paramMap.subscribe(params => {
    this.productosId = params.get('id');
  });
  this.objeto = this.productosService.loadProductos(this.productosId);
}

loadDataProductos(id: string) {
  this.objeto = this.productosService.loadProductos(id);
  if (!this.conId) {
    this.conId = true;
  }
}

updateProductos(id: string, nombre: string, nit: number){
  this.productosService.updateOneProductos(id, nombre, nit);
  this.route.navigate(['/listado-productos']);
}

}
