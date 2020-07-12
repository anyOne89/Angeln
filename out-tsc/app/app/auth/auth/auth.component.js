import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
let AuthComponent = class AuthComponent {
    constructor(userService, router, toastController) {
        this.userService = userService;
        this.router = router;
        this.toastController = toastController;
    }
    ngOnInit() {
    }
    logIn(email, password) {
        this.userService.login(email.value, password.value).then((res) => {
            this.router.navigate(['tabs']);
            this.sendEmailToUserForVerification();
        }).catch(err => {
            this.authFailedToast(err.message);
        });
    }
    sendEmailToUserForVerification() {
        if (!this.userService.isEmailVerified) {
            this.userService.SendVerificationMail().then(res => {
                this.printVerificationEmailSentToToast();
            });
        }
    }
    printVerificationEmailSentToToast() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Verification Email Sent to ' + this.userService.getUserEmail(),
                duration: 4000
            });
            yield toast.present();
        });
    }
    goToRegisterPage() {
        this.router.navigate(['/register']).then(res => {
        });
    }
    authFailedToast(message) {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: '' + message,
                duration: 4000
            });
            yield toast.present();
        });
    }
};
AuthComponent = __decorate([
    Component({
        selector: 'app-auth',
        templateUrl: './auth.component.html',
        styleUrls: ['./auth.component.scss'],
    })
], AuthComponent);
export { AuthComponent };
//# sourceMappingURL=auth.component.js.map