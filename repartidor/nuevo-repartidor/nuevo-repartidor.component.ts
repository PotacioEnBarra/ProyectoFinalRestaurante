import { Component, OnInit } from '@angular/core';
import { Repartidor } from '../repartidor.model';
import { RepartidorService } from '../repartidor.service';

@Component({
  selector: 'app-nuevo-repartidor',
  templateUrl: './nuevo-repartidor.component.html',
  styleUrls: ['./nuevo-repartidor.component.css']
})
export class NuevoRepartidorComponent implements OnInit {

  repartidor: Repartidor = new Repartidor();
  areasTodas: any;
  submitted: boolean = false;

  constructor(private repartidorService: RepartidorService) { 
    this.areasTodas = this.repartidorService.areasRef;
    repartidorService.areasRef.valueChanges().susbscribe(areas =>
      {this.areasTodas = areas});
  }

  ngOnInit(): void {
  }
  saveRepartidor(): void {
    this.repartidorService.create(this.repartidor).then(() => {
      console.log('Nuevo cliente creado');
      this.submitted = true;
    });
  }
  newRepartidor(): void {
    this.submitted = false;
    this.repartidor = new Repartidor();
  }

}
