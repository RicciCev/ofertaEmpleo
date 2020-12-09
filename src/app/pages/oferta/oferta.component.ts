import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Oferta } from 'src/app/model/oferta';
import { OfertasService } from 'src/app/services/ofertas.service';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css']
})
export class OfertaComponent implements OnInit, OnDestroy {

  public ofertas: Array<Oferta>;
  private sub: any

  constructor(
    private ofertasService: OfertasService,
    private router: Router,
    private activatedRoute: ActivatedRoute
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

    this.sub = this.activatedRoute.paramMap.subscribe((parms: ParamMap) => {
      // en la petición get pasamos el nombre tal cual hemos establecido en las rutas.
      console.log('El id de la oferta es ' + parms.get('id'));
    });

    this.ofertasService.getOfertas();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
