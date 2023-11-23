import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    const isAuthenticated = this.authService.login(this.email, this.password);
    if (isAuthenticated) {
      this.router.navigate(['tabs']);
    } else {
      console.log('Inicio de sesión fallido. Verifica el correo y la contraseña.');
    }
  }

  ngOnInit() {
  }

}
