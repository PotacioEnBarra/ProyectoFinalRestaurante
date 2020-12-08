import { Repartidor } from './repartidor.model';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  repartidor: Repartidor;
  repartidorPrueba: any;
  idURL: string;

  constructor(private db: AngularFireDatabase, private afs: AngularFirestore, private route: Router) {
    // esto permite que se cree la collección categorias
    // con dos documentos de id:1 e id:2f
  }


  getDatosRepartidor(): Observable<any> {
    const tutRef = this.afs.doc('repartidor/' + this.idURL);
    return new Observable((o) => {
      setTimeout(() => {
        o.next(tutRef);
      }, 1000);
    });
  }
  deleteRepartidorOne(reparKey) {
    return this.afs.collection('repar').doc(reparKey).delete();
  }

  getAllRepartidores() {
    return this.afs.collection('repartidor').snapshotChanges();
  }

  async updateOneRepartidor(idr, nombrer, cedular, areaDeTrabajor, salarior) {
    this.afs.doc('usuario/' + idr).update(
      {
        nombre: nombrer,
        cedula: cedular,
        areaDeTrabajo: areaDeTrabajor,
        salario: salarior
      });
  }

  createRepartidor(repartidor: Repartidor): any {
    return this.afs.collection('repartidor').add(
      {
        nombre: repartidor.nombre,
        cedula: repartidor.cedula,
        areaDeTrabajo: repartidor.areaDeTrabajo,
        salario: repartidor.salario
      });
  }

  loadRepartidor(id: string) {
    this.idURL = id;
    const repartidores = this.afs.doc('repartidor/' + id).valueChanges();
    repartidores.subscribe(data => {
      this.repartidorPrueba = data;
    });
    return this.repartidorPrueba;
  }


  deleteRepartidor(repartidorId: string) {
    return this.afs.collection('repartidor').doc(repartidorId).delete();
  }

  deleteAllRepartidor(): Promise<void> {
    // return this.clientesRef.remove();
    return null;
  }
}


