import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Administrador } from './administrador.model';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  dbPhat='/administrador';

  administradorRef: AngularFireList<Administrador>=null;

  constructor(private db:AngularFireDatabase) {
    this.administradorRef=db.list(this.dbPhat);
  }

    getAllAdministrador(): AngularFireList<Administrador> {
      return this.administradorRef;
    }

    createAdministrador(Administrador: Administrador): any {
      return this.administradorRef.push(Administrador);
    }

    updateAdministrador(key: string, value: any): Promise<void> {
      return this.administradorRef.update(key, value);
    }

    deleteAdministrador(key: string): Promise<void> {
      return this.administradorRef.remove(key);
    }

    deleteAll(): Promise<void> {
      return this.administradorRef.remove();
    }
    deleteOne(administrador:Administrador):Promise<void>{
      return this.administradorRef.remove(administrador.key);
    }

}
