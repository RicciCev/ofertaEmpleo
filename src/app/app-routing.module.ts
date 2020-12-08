import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NuevaofertaComponent } from './pages/nuevaoferta/nuevaoferta.component';
import { OfertaComponent } from './pages/oferta/oferta.component';
import { OfertasComponent } from './pages/ofertas/ofertas.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'

  },
  {
    path: 'home',
    component: HomeComponent,
    // ruta hija del home, solamente accesible a través del home.
    children: [
      {
        path: 'oferta/:id',
        component: OfertaComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'ofertas',
    component: OfertasComponent
  },
  {
    path: 'nuevaoferta',
    component: NuevaofertaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
