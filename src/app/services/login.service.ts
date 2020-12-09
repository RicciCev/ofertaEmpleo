import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { LoginForm } from '../model/loginForm';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    private token: string;
    private isLoggedin: boolean;
    private isLoggedin$: Subject<boolean>

    constructor(private httpClient: HttpClient) {
        this.token = '';
        this.isLoggedin = false;
        this.isLoggedin$ = new Subject<boolean>();
    }
    
    public getIsLoggedin(): boolean {
        return this.isLoggedin;
    }

    public getIsLoggedinSub(): Observable<any> {
        return this.isLoggedin$.asObservable();
    }

    public getToken(): string {
        return this.token;
    }

    // AUTENTICACIÓN LOGIN
    public postLogin(loginModel: LoginForm) {
        console.log('Login Service');
        console.log(JSON.stringify(loginModel));

        const httpOptions = {
            headers: new HttpHeaders(
                {
                    'Content-Type': 'application/json'
                }
            )
        };

        this.httpClient.post('http://localhost:8080/api/authenticate', JSON.stringify(loginModel), httpOptions).subscribe(
            (response: any) => {
                console.log(response);
                // token que recibimos a través de la petición post.
                this.token = response.id_token;
                this.isLoggedin = true;
                // notificamos a los que están suscrito del cambio de estado de la boolean isLoggedin.
                this.isLoggedin$.next(this.isLoggedin);
            },
            error => {
                this.isLoggedin = false;
                console.log(error);
            }
        );
    }
}