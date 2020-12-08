import { Repartidor } from './../repartidor.model';
import { Component, OnInit } from '@angular/core';
import { RepartidorService } from './../repartidor.service';

@Component({
  selector: 'app-nuevo-repartidor',
  templateUrl: './nuevo-repartidor.component.html',
  styleUrls: ['./nuevo-repartidor.component.css']
})
export class RegistroRepartidorComponent implements OnInit {

  repartidor: Repartidor = new Repartidor();
  submitted = false;

  constructor(private repartidorService: RepartidorService) { }

  ngOnInit(): void {
  }

  doCreateRepartidor(repartidor: Repartidor): void {
    this.repartidorService.createUsuario(this.repartidor);
    this.submitted = true;
  }

  newRepartidor(): void {
    this.submitted = false;
  }

}

