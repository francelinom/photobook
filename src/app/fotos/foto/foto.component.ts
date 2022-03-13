import { environment } from './../../../environments/environment';
import { Component, Input, OnInit } from '@angular/core';

const API = environment.apiURL;

@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.css'],
})
export class FotoComponent implements OnInit {
  private urlOriginal = '';

  @Input() descricao = '';

  @Input() set url(url: string) {
    if (url.startsWith('data')) {
      this.urlOriginal = url;
    } else {
      this.urlOriginal = `${API}/imgs/${url}`;
    }
  }

  get url(): string {
    return this.urlOriginal;
  }

  constructor() {}

  ngOnInit(): void {}
}
