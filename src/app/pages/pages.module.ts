import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { NuevaofertaModule } from './nuevaoferta/nuevaoferta.module';
import { OfertasModule } from './ofertas/ofertas.module';
import { OfertaModule } from './oferta/oferta.module';

@NgModule({
    declarations: [],
    imports: [
       CommonModule,
       HomeModule,
       LoginModule,
       NuevaofertaModule,
       OfertaModule,
       OfertasModule
    ],
    exports: [
       HomeModule,
       LoginModule,
       NuevaofertaModule,
       OfertaModule,
       OfertasModule
    ],
})
export class PagesModule {}
