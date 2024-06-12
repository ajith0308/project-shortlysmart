import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {
    
  }

  onLogin(event: Event) {
    event.preventDefault(); // Prevent form submission
   
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;
 
    // Check if both email and password are not empty
    if (email.trim() !== '' && password.trim() !== '') {
      // Logic to validate login credentials can be added here
      this.router.navigate(['/url-shortener']);
    } else {
      // If either email or password is empty, prevent routing
      alert('Please enter both email and password.');
    }
  }
}

