import { Component } from '@angular/core';
import {UserService} from '../../core/services/user.service';

@Component({
  selector: 'app-tab4',
  templateUrl: 'mains-page.component.html',
  styleUrls: ['mains-page.component.scss']
})
export class MainsPage {

  constructor(public userService: UserService) {}

}
