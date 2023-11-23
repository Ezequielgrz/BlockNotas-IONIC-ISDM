import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly email = 'use@root.com';
  private readonly password = 'root1234';

  constructor(private router: Router) { }

  login(email: string, password: string): boolean {
    if (email === this.email && password === this.password) {
      return true;
    } else {
      return false;
    }
  }

  redirectToTabs() {
    this.router.navigate(['./tabs/tab1']);
  }
}
