import { Router, ActivatedRoute } from '@angular/router';
import { AdministradorService } from './../administrador.service';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { Administrador } from './../administrador.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modificar-administrador',
  templateUrl: './modificar-administrador.component.html',
  styleUrls: ['./modificar-administrador.component.css']
})
export class ModificarAdministradorComponent implements OnInit {

  administradorId: string;
  administrador: AngularFirestoreDocument<any>;
  objeto: Administrador;
  conId = false;

  constructor(private actRoute: ActivatedRoute,
    private administradorService: AdministradorService,
    private route: Router) { }

  async ngOnInit(){
    this.actRoute.paramMap.subscribe(params => {
      this.administradorId = params.get('id');
    });
    this.objeto = this.administradorService.loadAdministrador(this.administradorId);
  }

  loadDataAdministrador(id: string) {
    this.objeto = this.administradorService.loadAdministrador(id);
    if (!this.conId) {
      this.conId = true;
    }
  }

  updateAdministrador(id: string, nombre: string, telefono: number, direccion: string, email: string){
    this.administradorService.updateOneAdministrador(id, nombre, telefono, direccion, email);
    this.route.navigate(['/listado-Administrador']);
  }

}
