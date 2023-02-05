import { PlaceholderDirective } from './../../shared/placeholder.directive';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService, AuthResponseData } from './auth.service';
import {CustomLayout1Component} from 'custom-layouts/custom-layout-1/custom-layout-1.module'

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
  //   if (this.email === 'admin@gmail.com' && this.password === 'Admin1') {
  //     this.errorMessage = '';
  //   } else {
  //     this.errorMessage = 'Invalid credentials';
  //   }
  // }
  isLoginMode = true;
  isLoading = false;
  error = null;
  @ViewChild(platformBrowserDynamic) createLayout:PlaceholderDirective | undefined

  constructor(
    private authService: AuthService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private router: Router
  ) {}

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
        this.router.navigate(['/home']);
      },
      (errorMessage: any) => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.isLoading = false;
      }
    );

    form.reset();
  }

  private loadeLayout(email: string, password: string) {
  const customLayoutFactory =
    this.componentFactoryResolver.resolveComponentFactory(
      CustomLayout1Component
    );
    const hostViewContainerRef = this.createLayout?.viewContainerRef;
    hostViewContainerRef?.clear()
    const componentRef =
      hostViewContainerRef?.createComponent(
        customLayoutFactory
      );
      componentRef?.instance
  }
}
