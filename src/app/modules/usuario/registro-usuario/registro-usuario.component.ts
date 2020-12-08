import { UsuarioService } from './../usuario.service';
import { Usuario } from './../usuario.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {

  usuario: Usuario = new Usuario();
  submitted = false;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  doCreateusuario(usuario: Usuario): void {
    this.usuarioService.createUsuario(this.usuario);
    this.submitted = true;
  }

  newUsuario(): void {
    this.submitted = false;
  }

}
