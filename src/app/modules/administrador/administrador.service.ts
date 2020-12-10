import { Router } from '@angular/router';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Administrador } from './administrador.model';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  administrador: Administrador;
  administradorPrueba: any;
  idUrl: String;


  constructor(private db: AngularFireDatabase, private afs: AngularFirestore, private route: Router) { }

  getDatosAdministrador(): Observable<any> {
    const tuRef = this.afs.doc('administrador/' + this.idUrl);
    return new Observable((o) => {
      setTimeout(() => {
        o.next(tuRef);
      }, 1000);
    });
  }

  deleteAdministradorOne(administradorKey){
    return this.afs.collection('admin').doc(administradorKey).delete();
  }

  getAllAdministrador(){
    return this.afs.collection('administrador').snapshotChanges();
  }

  async updateOneAdministrador(idA,nombreA,telefonoA,direccionA,emailA){
    this.afs.doc('administrador/'+idA).update({
      nombre:nombreA,
      telefono:telefonoA,
      direccion:direccionA,
      email:emailA
    });
  }

  createAdministrador(administrador:Administrador):any{
    return this.afs.collection('administrador').add(
      {
        nombre: administrador.nombre,
        telefono:administrador.telefono,
        direccion:administrador.direccion,
        email:administrador.email
      }
    );
  }

  loadAdministrador(id:String){
    this.idUrl=id;
    const administradores=this.afs.doc('usuario/'+id).valueChanges();
    administradores.subscribe(data=>{
      this.administradorPrueba=data;
    });
    return this.administradorPrueba;
  }

  deleteAdministrador(administradorId: string){
    return this.afs.collection('usuario').doc(administradorId).delete();
  }

  deleteAllAdministrador(): Promise<void>{
    return null;
  }






}
