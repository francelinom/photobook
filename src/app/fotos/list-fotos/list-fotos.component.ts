import { switchMap } from 'rxjs/operators';
import { FotosService } from './../fotos.service';
import { UsuarioService } from './../../autenticacao/usuario/usuario.service';
import { Fotos } from './../fotos';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-fotos',
  templateUrl: './list-fotos.component.html',
  styleUrls: ['./list-fotos.component.css'],
})
export class ListFotosComponent implements OnInit {
  fotos$!: Observable<Fotos>;

  constructor(
    private usuarioService: UsuarioService,
    private fotosService: FotosService
  ) {}

  ngOnInit(): void {
    this.fotos$ = this.usuarioService.retornaUsuario().pipe(
      switchMap((usuario) => {
        const userName = usuario.name ?? '';
        return this.fotosService.listaDosuario(userName);
      })
    );
  }
}
