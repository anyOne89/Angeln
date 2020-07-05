import { Component } from '@angular/core';
import {UserService} from '../../core/services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: 'meins-page.component.html',
  styleUrls: ['meins-page.component.scss']
})
export class MeinsPage {

  constructor(public userService: UserService, public router: Router) {}



    showAboutMe() {
      this.router.navigate(['tabs/tab4/aboutMe']);
    }
}
