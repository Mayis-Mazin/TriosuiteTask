import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginFormComponent } from './login-form/login-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'auth', component: LoginFormComponent },

  { path: 'home', component: HomepageComponent },
  // {
  //   path: ':layout',
  //   component: AppComponent,
  // },
  // {
  //   path: '**',
  //   redirectTo: 'default',
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
