import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {

  constructor() { }

  ngOnInit() {}


  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }
  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';
  }
  logout() {
    this.authService.logout();
  }

}
