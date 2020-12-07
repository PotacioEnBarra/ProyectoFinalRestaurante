import { Component, OnInit } from '@angular/core';
import { RepartidorService } from '../repartidor.service';

@Component({
  selector: 'app-listado-repartidor',
  templateUrl: './listado-repartidor.component.html',
  styleUrls: ['./listado-repartidor.component.css']
})
export class ListadoRepartidorComponent implements OnInit {

  repartidoresTodos: any[] = [];

  constructor(private repartidorService: RepartidorService){
        repartidorService.repartidorRef.valueChanges().subscribe(async repartidores => {
        this.repartidoresTodos = repartidores;
      });
    }

  ngOnInit(): void {
  }

  deleteRepartidor(objeto): void {
        this.repartidorService.delete(objeto);
      }


}
