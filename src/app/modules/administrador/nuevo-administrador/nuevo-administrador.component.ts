import { Administrador } from './../administrador.model';
import { AdministradorService } from './../administrador.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevo-administrador',
  templateUrl: './nuevo-administrador.component.html',
  styleUrls: ['./nuevo-administrador.component.css']
})
export class NuevoAdministradorComponent implements OnInit {

  administrador: Administrador = new Administrador();
  submitted: boolean = false;



    constructor(private administradorService: AdministradorService) {}

    ngOnInit(): void {
    }

    doCreateAdministrador(administrador:Administrador): void {
      this.administradorService.createAdministrador(this.administrador);
      this.submitted=true;
    }
    newAdministrador(): void {
      this.submitted = false;
    }


}
