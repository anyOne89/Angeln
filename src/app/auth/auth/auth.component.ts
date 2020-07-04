import {Component, OnInit} from '@angular/core';
import {UserService} from '../../core/services/user.service';
import {Router} from '@angular/router';
import {IonInput, ToastController} from '@ionic/angular';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {

    constructor(public userService: UserService, private router: Router,
                public toastController: ToastController) {
    }

    ngOnInit() {


    }


    logIn(email: IonInput, password: IonInput): void {
        this.userService.login(email.value, password.value).then((res) => {
            this.router.navigate(['tabs']);

            if (!this.userService.isEmailVerified) {
                this.userService.SendVerificationMail().then(res => {
                    this.presentToast();
                });
            }

        }).catch((error) => {
            this.authFailedToast(error.message);
        });
    }


    goToRegisterPage() {
        this.router.navigate(['/register']).then(res => {
        });
    }


    async presentToast() {
        const toast = await this.toastController.create({
            message: 'Verification Email Sent to ' +  this.userService.getUserEmail(),
            duration: 4000
        });
        await toast.present();
    }

    async authFailedToast(message) {
        const toast = await this.toastController.create({
            message: '' + message,
            duration: 4000
        });
        await toast.present();
    }
}
