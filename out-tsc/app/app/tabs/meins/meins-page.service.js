import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
let MeinsPageService = class MeinsPageService {
    constructor() {
        this.isDarkmode = new BehaviorSubject(false);
    }
    setDarkModeFromPersistence(isDarkMode) {
        this.isDarkmode.next(isDarkMode);
    }
};
MeinsPageService = __decorate([
    Injectable()
], MeinsPageService);
export { MeinsPageService };
//# sourceMappingURL=meins-page.service.js.map