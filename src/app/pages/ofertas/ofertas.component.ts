import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Oferta } from 'src/app/model/oferta';
import { LoginService } from 'src/app/services/login.service';
import { OfertasService } from 'src/app/services/ofertas.service';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css'],
})
export class OfertasComponent implements OnInit, OnDestroy {
  public ofertas: Array<Oferta>;
  private sub: any;
  private subLogin: any;

  constructor(
    private loginService: LoginService,
    private ofertasService: OfertasService,
    private router: Router
  ) {
    if (!this.loginService.getIsLoggedin) {
      this.router.navigate(['login']);
    }
    this.ofertas = this.ofertasService.getListaOfertas();
  }

  ngOnInit(): void {
    this.sub = this.ofertasService.getOfertasSub().subscribe(
      (response: Array<Oferta>) => {
        this.ofertas = response;
      },
      (error) => {
        console.log(error);
      }
    );

    this.subLogin = this.loginService.getIsLoggedinSub().subscribe(
      (response: boolean) => {
        if (response === false) {
          this.router.navigate(['login']);
        }
      },
      error => {
        console.log(error);
      }
    );

    this.ofertasService.getOfertasAdmin();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.subLogin.unsubscribe();
  }

  /*
  public viewOferta(id: any): void {
    this.router.navigate(['/home/oferta', id]);
  }
  */

  public deleteOferta(id: number): void {
    console.log('Click ' + id);
    this.ofertasService.deleteOferta(id);
  }
}
