import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevaofertaComponent } from './nuevaoferta.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [NuevaofertaComponent],
  imports: [
    CommonModule, FormsModule
  ]
})
export class NuevaofertaModule { }
