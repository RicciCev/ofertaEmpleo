import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfertasComponent } from './ofertas.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [OfertasComponent],
  imports: [
    CommonModule, RouterModule
  ]
})
export class OfertasModule { }
