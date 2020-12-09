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

    constructor(
        private httpClient: HttpClient,
        private loginService: LoginService
        ) {
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
}
