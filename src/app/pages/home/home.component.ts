import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Oferta } from 'src/app/model/oferta';
import { OfertasService } from 'src/app/services/ofertas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  public ofertas: Array<Oferta>;
  private sub: any;

  constructor(
    private ofertasService: OfertasService,
    private router: Router
  ) {
    this.ofertas = this.ofertasService.getListaOfertas();
  }

  ngOnInit(): void {
    this.sub = this.ofertasService.getOfertasSub().subscribe(
      (response: Array<Oferta>) => {
        this.ofertas = response;
      },
      error => {
        console.log(error);
      }
    );

    this.ofertasService.getOfertas();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
