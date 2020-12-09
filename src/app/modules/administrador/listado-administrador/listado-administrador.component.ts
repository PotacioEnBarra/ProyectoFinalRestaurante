import { AdministradorService } from './../administrador.service';
import { Administrador } from './../administrador.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-administrador',
  templateUrl: './listado-administrador.component.html',
  styleUrls: ['./listado-administrador.component.css']
})
export class ListadoAdministradorComponent implements OnInit {

  administradorTodos:any[]=[];
  emailAdministrador:any;

  constructor(private AdministradorService:AdministradorService) {
    AdministradorService.administradorRef.valueChange().subscribe(async administrador=>{
      this.administradorTodos=administrador;
    });
   }


  ngOnInit(): void {
  }

  deleteAdministrador(Administrador):void{
    this.AdministradorService.deleteOne(Administrador);
  }

}
