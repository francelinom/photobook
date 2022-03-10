import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FotosRoutingModule } from './fotos-routing.module';
import { ListFotosComponent } from './list-fotos/list-fotos.component';
import { FotoComponent } from './foto/foto.component';

@NgModule({
  declarations: [ListFotosComponent, FotoComponent],
  imports: [CommonModule, FotosRoutingModule],
})
export class FotosModule {}
