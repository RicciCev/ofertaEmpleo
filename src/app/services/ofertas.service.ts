import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Oferta } from '../model/oferta';

@Injectable({
    providedIn: 'root'
})
export class OfertasService {
    private ofertas: Array<Oferta>;
    private ofertas$: Subject<Array<Oferta>>;

    constructor(private httpClient: HttpClient) {
        this.ofertas = new Array<Oferta>();
        this.ofertas$ = new Subject<Array<Oferta>>();
    }

    public getOfertasSub(): Observable<any> {
        return this.ofertas$.asObservable();
    }

    public getListaOfertas(): Array<Oferta> {
        return this.ofertas;
    }

    public getOfertas(): void {
        const httpOptions = {
            headers: new HttpHeaders()
        };

        this.httpClient.get('http://localhost:8080/api/ofertas', httpOptions).subscribe(
            (response: any) => {
                console.log(JSON.stringify(response));
                this.ofertas = response;
                this.ofertas$.next(this.ofertas);
            },
            error => {
                console.log(error);
            }
        );
    }
}
