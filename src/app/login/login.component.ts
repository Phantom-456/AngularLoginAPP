import { Component } from '@angular/core';
import { AuthService } from '../Service/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router:Router) {}

  async signIn() {
    console.log('Sign in clicked\n', 'Username:', this.username, '  password:', this.password);
    await this.authService.signIn(this.username, this.password)
  }

  showSignUp(): void {
    console.log('Sign up clicked');
    this.router.navigate(['signup']);
  }
}
