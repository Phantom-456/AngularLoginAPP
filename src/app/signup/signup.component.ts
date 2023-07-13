import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../Service/auth.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  username: string = '';
  password: string = '';
  constructor(private router:Router, private auth: AuthService) {}
    signUp(): void {

      this.auth.signUp(this.username, this.password);
    }
  }

