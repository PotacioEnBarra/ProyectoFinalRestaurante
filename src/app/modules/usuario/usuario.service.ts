import { Router } from '@angular/router';
import { Usuario } from './usuario.model';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario: Usuario;
  usuarioPrueba: any;
  idURL: string;

  constructor(private db: AngularFireDatabase, private afs: AngularFirestore, private route: Router) {
    // esto permite que se cree la collección categorias
    // con dos documentos de id:1 e id:2f
  }


  getDatosUsuario(): Observable<any> {
    const tutRef = this.afs.doc('usuario/' + this.idURL);
    return new Observable((o) => {
      setTimeout(() => {
        o.next(tutRef);
      }, 1000);
    });
  }


  deleteusuarioOne(userKey) {
    return this.afs.collection('users').doc(userKey).delete();
  }

  getAllusuarios() {
    return this.afs.collection('usuario').snapshotChanges();
  }

  async updateOneUsuario(idr, nombrer, telefonor, direccionr, emailr) {
    this.afs.doc('usuario/' + idr).update(
      {
        nombre: nombrer,
        telefono: telefonor,
        direccion: direccionr,
        email: emailr
      });
  }

  createUsuario(usuario: Usuario): any {
    return this.afs.collection('usuario').add(
      {
        nombre: usuario.nombre,
        telefono: usuario.telefono,
        direccion: usuario.direccion,
        email: usuario.email
      });
  }

  loadUsuario(id: string) {
    this.idURL = id;
    const usuarios = this.afs.doc('usuario/' + id).valueChanges();
    usuarios.subscribe(data => {
      this.usuarioPrueba = data;
    });
    return this.usuarioPrueba;
  }


  deleteUsuario(usuarioId: string) {
    return this.afs.collection('usuario').doc(usuarioId).delete();
  }

  deleteAllUsuarios(): Promise<void> {
    // return this.clientesRef.remove();
    return null;
  }
}
