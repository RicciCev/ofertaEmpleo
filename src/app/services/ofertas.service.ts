import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Oferta } from '../model/oferta';
import { LoginService } from './login.service';

@Injectable({
    providedIn: 'root'
})
export class OfertasService {
    private ofertas: Array<Oferta>;
    private ofertas$: Subject<Array<Oferta>>;
    private idCreateOfertas: number;

    constructor(
        private httpClient: HttpClient,
        private loginService: LoginService
        ) {
        this.ofertas = new Array<Oferta>();
        this.ofertas$ = new Subject<Array<Oferta>>();
        // 11 porque ya tenemos 10 elementos por defecto en el array.
        this.idCreateOfertas = 11;
    }

    public getOfertasSub(): Observable<any> {
        return this.ofertas$.asObservable();
    }

    public getListaOfertas(): Array<Oferta> {
        return this.ofertas;
    }

    public addOferta(item: any): void {
        item.id = this.idCreateOfertas;
        this.idCreateOfertas++;
        this.ofertas.push(item);
        this.ofertas$.next(this.ofertas);
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

    public getOfertasAdmin(): void {
        const httpOptions = {
            headers: new HttpHeaders(
                {
                    'Authorization': 'Bearer ' + this.loginService.getToken()
                }
            )
        };

        this.httpClient.get('http://localhost:8080/api/ofertas', httpOptions).subscribe(
            (response: any) => {
                console.log(JSON.stringify(response));
                this.ofertas = response;
                this.ofertas$.next(this.ofertas);
            },
            error => {
                console.log(error);
                this.loginService.logOut();
            }
        );
    }

    public deleteOferta(id: number): void {
        const httpOptions = {
            headers: new HttpHeaders(
                {
                    'Authorization': 'Bearer ' + this.loginService.getToken()
                }
            )
        };

        this.httpClient.delete('http://localhost:8080/api/ofertas/' + id, httpOptions).subscribe(
            (response: any) => {
                console.log(response);
                this.getOfertasAdmin();
            },
            error => {
                console.log(error);
            }
        );
    }

    public postOferta(ofertaModel: Oferta) {
        const httpOptions = {
            headers: new HttpHeaders(
                {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + this.loginService.getToken()
                }
            )
        };

        this.httpClient.post('http://localhost:8080/api/ofertas', JSON.stringify(ofertaModel), httpOptions).subscribe(
            (response: any) => {
                console.log(JSON.stringify(response));
                this.addOferta(ofertaModel);
                this.getOfertasAdmin();
            },
            error => {
                console.log(error);
            }
        );

    }
}
