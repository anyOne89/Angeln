import {Component, OnInit} from '@angular/core';
import {UserService} from "../core/services/user.service";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {

    constructor(public userService: UserService) {
    }

    ngOnInit() {
    }


    logIn(email, password) {
        this.userService.signup(email, password).then((res) => {
            if (this.userService.isEmailVerified) {
                this.router.navigate(['']);
            } else {
                window.alert('Email is not verified')
                return false;
            }
        }).catch((error) => {
            window.alert(error.message)
        });
    }
}
