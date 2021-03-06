import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable()
export class AutenticacionService {

  constructor(public afAuth: AngularFireAuth) { }

  async login(email: string, password: string) {
      const resultado = await this.afAuth.signInWithEmailAndPassword(email, password);
      return resultado;
  }

  async registrar(email: string, password: string) {
    const resultado = await this.afAuth.createUserWithEmailAndPassword(email, password);
    return resultado;
  }

  async logout() {
    await this.afAuth.signOut();
  }

  getUsuarioActual() {
    let user = this.afAuth.currentUser;
    return user;
  }

  getAdministradorActual() {
    let admin = this.afAuth.currentUser;
    return admin;
  }
}
