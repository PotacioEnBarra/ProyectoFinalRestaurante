import { Usuario } from './../usuario.model';
import { Component, OnInit } from '@angular/core';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-modificadousuario',
  templateUrl: './modificadousuario.component.html',
  styleUrls: ['./modificadousuario.component.css']
})
export class ModificadousuarioComponent implements OnInit {

  usuarioId: string;
  usuario: AngularFirestoreDocument<any>;
  objeto: Usuario;
  conId = false;

  constructor(private actRoute: ActivatedRoute,
              private usuarioService: UsuarioService,
              private route: Router) {
    // this.clienteId = this.actRoute.snapshot.params.id;
  }

  async ngOnInit() {
    this.actRoute.paramMap.subscribe(params => {
      this.usuarioId = params.get('id');
    });
    this.objeto = this.usuarioService.loadUsuario(this.usuarioId);
  }

  loadDataUsuario(id: string) {
    this.objeto = this.usuarioService.loadUsuario(id);
    if (!this.conId) {
      this.conId = true;
    }
  }

  updateUsuario(id: string, nombre: string, telefono: number, direccion: string, email: string){
    this.usuarioService.updateOneUsuario(id, nombre, telefono, direccion, email);
    this.route.navigate(['/listado-usuarios']);
  }

}
