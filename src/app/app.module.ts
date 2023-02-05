import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CustomLayout1Module } from 'custom-layouts/custom-layout-1/custom-layout-1.module';
import { CustomLayout2Module } from 'custom-layouts/custom-layout-2/custom-layout-2.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginFormComponent,

    LoadingSpinnerComponent,
    HeaderComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CustomLayout1Module,
    CustomLayout2Module,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
