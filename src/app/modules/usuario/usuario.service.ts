import { Usuario } from './usuario.model';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private dbPath = '/usuario';

  usuarioRef: AngularFireList<Usuario> = null;

  constructor(private db: AngularFireDatabase) {
    this.usuarioRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<Usuario> {
    return this.usuarioRef;
  }

  create(usuario: Usuario): any {
    return this.usuarioRef.push(usuario);
  }

  update(key: string, value: any): Promise<void> {
    return this.usuarioRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.usuarioRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.usuarioRef.remove();
  }

}
