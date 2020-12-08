import { Productos } from './../productos.model';
import { Router } from '@angular/router';
import { AutenticacionService } from './../../../autenticacion/services/autenticacion.service';
import { ProductosService } from './../productos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css'],
  providers: [AutenticacionService]
})
export class ListadoProductosComponent implements OnInit {

  public isLogged = false;
  public user = null;
  productosTodos: any[] = [];

  constructor(private productosService: ProductosService,
    private autenticacion: AutenticacionService,
    private router: Router
) {}

doDeleteProductos(id: string) {
  this.productosService.deleteProductos(id).then(
    res => {
      this.router.navigate(['/listado-productos']);
    },
    err => {
      console.log(err);
    }
  );
}

async ngOnInit() {
  this.user = await this.autenticacion.getProductosActual();
  if (this.user){
    this.isLogged = true;
  }
  this.productosService.getAllproductos().subscribe(data => {
    this.productosTodos = data.map(e => {
      console.log('ALL PRODUCTOS');
      return {
        id: e.payload.doc.id, ...e.payload.doc.data() as Productos
      };
    });
  });
}

}
