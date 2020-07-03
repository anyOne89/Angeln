import {Component, OnInit} from '@angular/core';
import {UserService} from '../../core/services/user.service';
import {Router} from '@angular/router';
import {IonInput} from '@ionic/angular';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {

    constructor(public userService: UserService, private router: Router) {
    }

    ngOnInit() {


    }


    logIn(email: IonInput, password: IonInput) {
        this.userService.login(email.value, password.value).then((res) => {
            console.log('working');
            // if (this.userService.isEmailVerified) {
            this.router.navigate(['tabs']);
            //     window.alert('working');
            //     console.log('working');
            // } else {
            //     window.alert('Email is not verified');
            //     console.log('mail is not verified');
            //     return false;
            // }
        }).catch((error) => {
            window.alert(error.message);
        });
    }


    goToRegisterPage() {
        this.router.navigate(['/register']).then(res => {
        });
    }
}
