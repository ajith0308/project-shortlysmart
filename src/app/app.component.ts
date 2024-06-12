import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UrlShortenerComponent } from './url-shortener/url-shortener.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginComponent,UrlShortenerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'project-unknown-';
}
