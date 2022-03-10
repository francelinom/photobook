import { Fotos } from './../fotos';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grade-fotos',
  templateUrl: './grade-fotos.component.html',
  styleUrls: ['./grade-fotos.component.css'],
})
export class GradeFotosComponent implements OnInit {
  @Input() fotos!: Fotos;

  constructor() {}

  ngOnInit(): void {}
}
