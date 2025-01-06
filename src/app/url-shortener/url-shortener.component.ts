import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel, NgModelGroup } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-url-shortener',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule,HttpClientModule],
  templateUrl: './url-shortener.component.html',
  styleUrls: ['./url-shortener.component.scss']
})
export class UrlShortenerComponent {
  url: string = '';
  shortenedUrl: string = '';
  qrImageUrl: any;
loading: any;
 
  constructor(private http: HttpClient,private routes: ActivatedRoute,private router: Router) {}

  ngOnInit(): void {
    this.routes.queryParams.subscribe(params => {
      const userId = params['userId'];
      const secret = params['secret'];
      const expire = params['expire'];
      const project = params['project'];

      // Now you can use these parameters as needed
      if (userId && secret && expire && project) {
        // Store data in local storage
        localStorage.setItem('userId', userId);
        localStorage.setItem('secret', secret);
        localStorage.setItem('expire', expire);
        localStorage.setItem('project', project);
      } else {
        // If any parameter is missing, navigate back to the login route
        this.router.navigate(['/login']);
      }
    });
  }


  onInputFocus(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    inputElement.placeholder = '';
  }

  onInputBlur(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (!inputElement.value) {
      inputElement.placeholder = 'Enter the valid URL';
    }
  }
  onShortenUrl() {
    if (this.url.trim() !== '') {
      // Make an HTTP request to the URL shortening API
      this.http.post<{ shortenedUrl: string }>('https://project-shortlysmart-api.onrender.com/shorten', { url: this.url })
        .subscribe(
          (response:any) => {
            this.shortenedUrl = response.short_url;
            this.qrImageUrl = response.qrurl.image;
          },
          error => {
            console.error('Error shortening the URL:', error);
            alert('An error occurred while shortening the URL. Please try again.');
          }
        );
    } else {
      alert('Please enter a valid URL.');
    }
  }
  copyToClipboard() {
    const inputElement = document.getElementById('shortened-url') as HTMLInputElement;
    inputElement.select();
    document.execCommand('copy');
    alert('Shortened URL copied to clipboard.');
  }
}
