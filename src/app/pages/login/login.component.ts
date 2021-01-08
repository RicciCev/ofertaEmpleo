import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginForm } from 'src/app/model/loginForm';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginModel: LoginForm;
  sub: any;
  errorCredenciales: boolean;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {
    this.loginModel = new LoginForm();
    this.errorCredenciales = false;
  }

  ngOnInit(): void {
    this.sub = this.loginService.getIsLoggedinSub().subscribe(
      response => {
        // recibimos el valor de la boolean isLoggedin.
        console.log(response);
        if (response) {
          this.errorCredenciales = false;
          this.router.navigate(['ofertas']);
        } 
      },
      error => {
        this.errorCredenciales = true;
        console.log(this.errorCredenciales);
        console.log(error);
      }
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  public onSubmit(f: NgForm) {
    this.loginService.postLogin(this.loginModel);
  }
}
