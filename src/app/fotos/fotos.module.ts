import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FotosRoutingModule } from './fotos-routing.module';
import { ListFotosComponent } from './list-fotos/list-fotos.component';

@NgModule({
  declarations: [ListFotosComponent],
  imports: [CommonModule, FotosRoutingModule],
})
export class FotosModule {}
