import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Ranks } from '../../../core/models/ranks';
let RegisterComponent = class RegisterComponent {
    constructor(userService, router, afs) {
        this.userService = userService;
        this.router = router;
        this.afs = afs;
        this.userDBSammlung = 'users';
    }
    ngOnInit() {
        this.usersRef = this.afs.collection(this.userDBSammlung);
    }
    signUp(name, email, password) {
        this.userService.signUp(email.value, password.value).then(res => {
            this.router.navigate(['tabs']);
            const user = {
                userUid: res.user.uid.toString(),
                name: name.value.toString(),
                email: res.user.email.toString(),
                registerDate: new Date(),
                rank: Ranks.jungFischer.toString()
            };
            // add User to DB
            this.usersRef.add(user);
        }).catch(err => {
            console.log('Something went wrong:', err.message);
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