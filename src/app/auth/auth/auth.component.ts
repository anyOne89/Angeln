import {Component, OnInit} from '@angular/core';
import {UserService} from '../../core/services/user.service';
import {Router} from '@angular/router';
import {IonInput, ToastController} from '@ionic/angular';
import UserCredential = firebase.auth.UserCredential;

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
        this.userService.login(email.value, password.value).then((res: UserCredential): void => {
            this.router.navigate(['tabs']);

            // this.sendEmailToUserForVerification();

        }).catch(err => {
            this.authFailedToast(err.message);
        });
    }


    private sendEmailToUserForVerification() {
        if (!this.userService.isEmailVerified) {
            this.userService.SendVerificationMail().then(res => {
                this.printVerificationEmailSentToToast();
            });
        }
    }

    private async printVerificationEmailSentToToast() {
        const toast = await this.toastController.create({
            message: 'Verification Email Sent to ' + this.userService.getUserEmail(),
            duration: 4000
        });
        await toast.present();
    }

    goToRegisterPage() {
        this.router.navigate(['/register']).then(res => {
        });
    }


    async authFailedToast(message) {
        const toast = await this.toastController.create({
            message: '' + message,
            duration: 4000
        });
        await toast.present();
    }
}
