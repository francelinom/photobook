import { environment } from './../../environments/environment';
import { TokenService } from './../autenticacao/token.service';
import { Fotos } from './fotos';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class FotosService {
  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService
  ) {}

  listaDosuario(nomeDoUsuario: string): Observable<Fotos> {
    const token = this.tokenService.retornaToken();
    const headers = new HttpHeaders().append('x-access-token', token);
    return this.httpClient.get<Fotos>(`${API}/${nomeDoUsuario}photos`, {
      headers,
    });
  }
}
