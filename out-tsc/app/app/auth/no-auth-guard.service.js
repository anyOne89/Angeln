import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { map, take } from 'rxjs/operators';
let NoAuthGuard = class NoAuthGuard {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    canActivate(next, state) {
        const isLoggedIn = this.userService.isLoggedIn.pipe(take(1), map(isAuth => !isAuth));
        if (isLoggedIn) {
            this.router.navigate(['/tabs']).then(res => {
            });
        }
        return isLoggedIn;
    }
};
NoAuthGuard = __decorate([
    Injectable({
        providedIn: 'root'
    })
], NoAuthGuard);
export { NoAuthGuard };
//# sourceMappingURL=no-auth-guard.service.js.map