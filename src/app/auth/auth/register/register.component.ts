import {Component, OnInit} from '@angular/core';
import {IonInput} from '@ionic/angular';
import {UserService} from '../../../core/services/user.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

    constructor(public userService: UserService, private router: Router) {
    }

    ngOnInit() {
    }

    signUp(email: IonInput, password: IonInput) {
        this.userService.signUp(email.value, password.value).then(res => {
            this.router.navigate(['tabs']);
        });
    }
}
