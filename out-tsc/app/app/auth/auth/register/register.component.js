import { __decorate } from "tslib";
import { Component } from '@angular/core';
let RegisterComponent = class RegisterComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    ngOnInit() {
    }
    signUp(email, password) {
        this.userService.signUp(email.value, password.value).then(res => {
            this.router.navigate(['tabs']);
        });
    }
};
RegisterComponent = __decorate([
    Component({
        selector: 'app-register',
        templateUrl: './register.component.html',
        styleUrls: ['./register.component.scss'],
    })
], RegisterComponent);
export { RegisterComponent };
//# sourceMappingURL=register.component.js.map