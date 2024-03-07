import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginForm } from './auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: boolean = false;
  isLoading: boolean = false;

  constructor(private router: Router) { }

  Users: any[] = [
      {
          email: 'itc.edu@gmail.com',
          password: '123456789'
      }
  ];

  login(form: LoginForm) {
      if (form.email === this.Users[0].email && form.password === this.Users[0].password) {
          this.isAuthenticated = true;
          this.router.navigate(['']);
      } else {
          alert('Login not successful');
          this.isAuthenticated = false;
      }
  }
}
