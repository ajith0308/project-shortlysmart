import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel, NgModelGroup } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-url-shortener',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './url-shortener.component.html',
  styleUrls: ['./url-shortener.component.scss']
})
export class UrlShortenerComponent {
  url: string = '';

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
}
