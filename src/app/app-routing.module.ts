import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UrlShortenerComponent } from './url-shortener/url-shortener.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'url-shortener', component: UrlShortenerComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
