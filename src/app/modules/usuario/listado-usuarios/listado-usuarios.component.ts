import { AutenticacionService } from './../../../autenticacion/services/autenticacion.service';
import { UsuarioService } from './../usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css']
})
export class ListadoUsuariosComponent implements OnInit {

  usuariosTodos: any[] = [];
  emailUsuarioActual: any;

  constructor(private usuarioService: UsuarioService, private autenticacion: AutenticacionService) {
    usuarioService.usuarioRef.valueChanges().subscribe(async usuario => {
      this.usuariosTodos = usuario;
    });
    this.recuperarCorreo();
  }

  async recuperarCorreo(){
    this.emailUsuarioActual = (await this.autenticacion.getUsuarioActual()).email;
  }

  deleteUsuario(objeto): void {
    this.usuarioService.delete(objeto);
  }

  ngOnInit(): void {
  }

}
