import { Repartidor } from './../repartidor.model';
import { Router } from '@angular/router';
import { AutenticacionService } from './../../../autenticacion/services/autenticacion.service';
import { RepartidorService } from './../repartidor.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-repartidor',
  templateUrl: './listado-repartidor.component.html',
  styleUrls: ['./listado-repartidor.component.css'],
  providers: [AutenticacionService]
})
export class ListadoRepartidorComponent implements OnInit {

  public isLogged = false;
  public repar = null;
  repartidorTodos: any[] = [];

  constructor(private repartidorService: RepartidorService,
              private autenticacion: AutenticacionService,
              private router: Router
) {}

doDeleteRepartidor(id: string) {
  this.repartidorService.deleteRepartidor(id).then(
    res => {
      this.router.navigate(['/listado-repartidor']);
    },
    err => {
      console.log(err);
    }
  );
}

  async ngOnInit() {
    this.repar = await this.autenticacion.getRepartidorActual();
    if (this.repar){
      this.isLogged = true;
    }
    this.repartidorService.getAllRepartidores().subscribe(data => {
      this.repartidorTodos = data.map(e => {
        console.log('ALL REPARTIDORES');
        return {
          id: e.payload.doc.id, ...e.payload.doc.data() as Repartidor
        };
      });
    });
  }

}
