import { Repartidor } from './../repartidor.model';
import { Component, OnInit } from '@angular/core';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { RepartidorService } from '../repartidor.service';

@Component({
  selector: 'app-modificacar-repartidor',
  templateUrl: './modificar-repartidor.component.html',
  styleUrls: ['./modificar-repartidor.component.css']
})
export class ModificarRepartidorComponent implements OnInit {

  repartidorId: string;
  repartidor: AngularFirestoreDocument<any>;
  objeto: Repartidor;
  conId = false;

  constructor(private actRoute: ActivatedRoute,
              private repartidorService: RepartidorService,
              private route: Router) {
    // this.clienteId = this.actRoute.snapshot.params.id;
  }

  async ngOnInit() {
    this.actRoute.paramMap.subscribe(params => {
      this.repartidorId = params.get('id');
    });
    this.objeto = this.repartidorService.loadRepartidor(this.repartidorId);
  }

  loadDataRepartidor(id: string) {
    this.objeto = this.repartidorService.loadURepartidor(id);
    if (!this.conId) {
      this.conId = true;
    }
  }

  updateRepartidor(id: string, nombre: string, cedula: number, areaDeTrabajo: string, salario: string){
    this.repartidorService.updateOneRepartidor(id, nombre, cedula, areaDeTrabajo, salario);
    this.route.navigate(['/listado-repartidor']);
  }

}
