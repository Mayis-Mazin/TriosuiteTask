import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PlaceholderDirective } from './shared/placeholder.directive';
import { CustomLayoutsModule } from 'customLayouts/custom-layouts.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    LoadingSpinnerComponent,
    HeaderComponent,
    HomepageComponent,
    PlaceholderDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CustomLayoutsModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
