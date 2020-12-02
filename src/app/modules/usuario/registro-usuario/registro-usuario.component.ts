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
  submitted: boolean = false;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  saveUsuario(): void {
    this.usuarioService.create(this.usuario).then(() =>{
      console.log('Nuevo usuario creado');
      this.submitted = true;
    });
  }

  newUsuario(): void {
    this.submitted = false;
    this.usuario = new Usuario();
  }

}
