import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Area, Repartidor } from './repartidor.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RepartidorService {
  private dbPath = '/repartidores';
  private dbPathAreas = '/areas';
  repartidorRef: AngularFireList<Repartidor> = null;
  areasRef: any;

  constructor(private db: AngularFireDatabase) {
    this.repartidorRef = db.list(this.dbPath);
    this.areasRef = db.list(this.dbPathAreas);

    const areasRefe = db.database.ref('areas');
    areasRefe.set([
      {
        id: 1,
        nombre: 'Norte'
      },
      {
        id: 2,
        nombre: 'Sur'
      },
      {
        id: 3,
        nombre: 'centro'
      }
    ]);
   }

   getAll(): AngularFireList<Repartidor> {
        return this.repartidorRef;
      }
    getAllAreas(): AngularFireList<Area>{
      return this.areasRef;
    }
      create(repartidor: Repartidor): any {
        return this.repartidorRef.push(repartidor);
      }
      update(key: string, value: any): Promise<void> {
        return this.repartidorRef.update(key, value);
      }
      delete(key: string): Promise<void> {
        return this.repartidorRef.remove(key);
      }
      deleteAll(): Promise<void> {
        return this.repartidorRef.remove();
      }
}
