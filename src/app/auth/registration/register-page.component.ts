import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../core/services/user.service';
import UserCredential = firebase.auth.UserCredential;

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})

export class RegistrationPage implements OnInit {

  constructor(
      public userService: UserService,
      public router: Router
  ) {
  }

  ngOnInit() {

  }

  signUp(email, password): void {
    this.userService.registerUser(email.value, password.value)
        .then((res: UserCredential) => {

          // Do something here
        }).catch((error) => {
      window.alert(error.message);
    });
  }

}
