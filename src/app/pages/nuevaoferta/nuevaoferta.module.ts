import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevaofertaComponent } from './nuevaoferta.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [NuevaofertaComponent],
  imports: [
    CommonModule, FormsModule, RouterModule
  ],
  exports: [NuevaofertaComponent]
})
export class NuevaofertaModule { }
