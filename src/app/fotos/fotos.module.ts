import { CartaoModule } from './../components/cartao/cartao.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FotosRoutingModule } from './fotos-routing.module';
import { ListFotosComponent } from './list-fotos/list-fotos.component';
import { FotoComponent } from './foto/foto.component';
import { GradeFotosComponent } from './grade-fotos/grade-fotos.component';

@NgModule({
  declarations: [ListFotosComponent, FotoComponent, GradeFotosComponent],
  imports: [CommonModule, FotosRoutingModule, CartaoModule],
})
export class FotosModule {}
