import { Router } from '@angular/router';
import { AutenticacionService } from './../../../autenticacion/services/autenticacion.service';
import { AdministradorService } from './../administrador.service';
import { Administrador } from './../administrador.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-administrador',
  templateUrl: './listado-administrador.component.html',
  styleUrls: ['./listado-administrador.component.css'],
  providers:[AutenticacionService]
})
export class ListadoAdministradorComponent implements OnInit {

  public isLogged=false;
  public admin=null;
  administradorTodos:any[]=[];


  constructor(private AdministradorService: AdministradorService,
    private autenticacion: AutenticacionService,
    private router: Router ){}



   doDeleteAdminstrador(id: string) {
    this.AdministradorService.deleteAdministrador(id).then(
      res => {
        this.router.navigate(['/listado-administrador']);
      },
      err => {
        console.log(err);
      }
    );
  }



  async ngOnInit() {
    this.admin = await this.autenticacion.getAdministradorActual();
    if (this.admin){
      this.isLogged = true;
    }
    this.AdministradorService.getAllAdministrador().subscribe(data => {
      this.administradorTodos = data.map(e => {
        console.log('ALL ADMINISTRADOR');
        return {
          id: e.payload.doc.id, ...e.payload.doc.data() as Administrador
        };
      });
    });


}
