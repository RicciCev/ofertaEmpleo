import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { OfertasService } from 'src/app/services/ofertas.service';
import { Oferta } from 'src/app/model/oferta';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-nuevaoferta',
  templateUrl: './nuevaoferta.component.html',
  styleUrls: ['./nuevaoferta.component.css']
})
export class NuevaofertaComponent implements OnInit {

  public ofertaModel: Oferta;
  sub: any;

  constructor(
    private ofertasService: OfertasService,
    private router: Router
  ) {
    this.ofertaModel = new Oferta();
   }

  ngOnInit(): void {
  }

  public onSubmit(f: NgForm) {
    console.log(JSON.stringify(this.ofertaModel));
    this.ofertasService.postOferta(this.ofertaModel);
    this.router.navigate(['/home']);
  }
}
