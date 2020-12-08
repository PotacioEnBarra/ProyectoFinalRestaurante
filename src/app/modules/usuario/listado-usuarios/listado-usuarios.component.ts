import { Usuario } from './../usuario.model';
import { Router } from '@angular/router';
import { AutenticacionService } from './../../../autenticacion/services/autenticacion.service';
import { UsuarioService } from './../usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css'],
  providers: [AutenticacionService]
})
export class ListadoUsuariosComponent implements OnInit {

  public isLogged = false;
  public user = null;
  usuariosTodos: any[] = [];

  constructor(private usuarioService: UsuarioService,
              private autenticacion: AutenticacionService,
              private router: Router
) {}

doDeleteUsuario(id: string) {
  this.usuarioService.deleteUsuario(id).then(
    res => {
      this.router.navigate(['/listado-usuarios']);
    },
    err => {
      console.log(err);
    }
  );
}

  async ngOnInit() {
    this.user = await this.autenticacion.getUsuarioActual();
    if (this.user){
      this.isLogged = true;
    }
    this.usuarioService.getAllusuarios().subscribe(data => {
      this.usuariosTodos = data.map(e => {
        console.log('ALL USUARIOS');
        return {
          id: e.payload.doc.id, ...e.payload.doc.data() as Usuario
        };
      });
    });
  }

}
