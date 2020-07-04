import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let AuthGuard = class AuthGuard {
    constructor(router, userService) {
        this.router = router;
        this.userService = userService;
    }
};
AuthGuard = __decorate([
    Injectable()
], AuthGuard);
export { AuthGuard };
//# sourceMappingURL=auth-guard.service.js.map