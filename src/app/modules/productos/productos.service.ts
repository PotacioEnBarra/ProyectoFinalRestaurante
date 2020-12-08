import { Router } from '@angular/router';
import { Productos } from './productos.model';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos: Productos;
  productosPrueba: any;
  idURL: string;

  constructor(private db: AngularFireDatabase, private afs: AngularFirestore, private route: Router) {
    // esto permite que se cree la collección categorias
    // con dos documentos de id:1 e id:2f
  }


  getDatosProductos(): Observable<any> {
    const tutRef = this.afs.doc('productos/' + this.idURL);
    return new Observable((o) => {
      setTimeout(() => {
        o.next(tutRef);
      }, 1000);
    });
  }


  deleteproductosOne(userKey) {
    return this.afs.collection('users').doc(userKey).delete();
  }

  getAllproductos() {
    return this.afs.collection('productos').snapshotChanges();
  }

  async updateOneProductos(idr, nombrer, nitr) {
    this.afs.doc('productos/' + idr).update(
      {
        nombre: nombrer,
        nit: nitr
      });
  }

  createProductos(productos: Productos): any {
    return this.afs.collection('productos').add(
      {
        nombre: productos.nombre,
        nit: productos.nit
      });
  }

  loadProductos(id: string) {
    this.idURL = id;
    const productos = this.afs.doc('productos/' + id).valueChanges();
    productos.subscribe(data => {
      this.productosPrueba = data;
    });
    return this.productosPrueba;
  }


  deleteProductos(productosId: string) {
    return this.afs.collection('productos').doc(productosId).delete();
  }

  deleteAllProductos(): Promise<void> {
    // return this.clientesRef.remove();
    return null;
  }
}
