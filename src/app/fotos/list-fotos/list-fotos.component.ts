import { FotosService } from './../fotos.service';
import { UsuarioService } from './../../autenticacao/usuario/usuario.service';
import { Fotos } from './../fotos';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-fotos',
  templateUrl: './list-fotos.component.html',
  styleUrls: ['./list-fotos.component.css'],
})
export class ListFotosComponent implements OnInit {
  fotos!: Fotos;

  constructor(
    private usuarioService: UsuarioService,
    private fotosService: FotosService
  ) {}

  ngOnInit(): void {
    this.usuarioService.retornaUsuario().subscribe((usuario) => {
      const userName = usuario.name ?? '';
      this.fotosService.listaDosuario(userName).subscribe((fotos) => {
        this.fotos = fotos;
      });
    });
  }
}
