import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService, AuthResponseData } from './auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  // email: string = '';
  // password: string = '';
  // errorMessage: string = '';

  // checkCredentials() {
  //   if (this.email === 'admin@gmail.com' && this.password === 'Admin') {
  //     this.errorMessage = '';
  //   } else {
  //     this.errorMessage = 'Invalid credentials';
  //   }
  // }
  isLoginMode = true;
  isLoading = false;
  error = null;

  constructor(private authService: AuthService, private router:Router) {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    let authObs: Observable<AuthResponseData>;

    this.isLoading = true;

    if (this.isLoginMode) {
      authObs = this.authService.login(email, password);
    } else {
      authObs = this.authService.signup(email, password);
    }

    authObs.subscribe(
      (resData: any) => {
        console.log(resData);
        this.isLoading = false;
        this.router.navigate(['/home'])
      },
      (errorMessage: any) => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.isLoading = false;
      }
    );

    form.reset();
  }
}
