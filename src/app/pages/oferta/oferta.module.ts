import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfertaComponent } from './oferta.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [OfertaComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [OfertaComponent]
})
export class OfertaModule { }
