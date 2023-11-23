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
  showAlert: boolean = false;

  alertButtons = ['Action'];

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    const isAuthenticated = this.authService.login(this.email, this.password);
    if (isAuthenticated) {
      this.router.navigate(['tabs']);
      this.showAlert = false;
    } else {
      console.log('Inicio de sesión fallido. Verifica el correo y la contraseña.');
      this.showAlert = true;
    }
  }

  ngOnInit() {
  }

}
