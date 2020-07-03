import { Component, OnInit } from '@angular/core';
import {IonInput} from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  signUp(email: IonInput, password: IonInput) {
    
  }
}
