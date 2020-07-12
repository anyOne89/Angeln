import { __decorate } from "tslib";
import { Component } from '@angular/core';
let MeinsPage = class MeinsPage {
    constructor(userService, router, meinsPageService) {
        this.userService = userService;
        this.router = router;
        this.meinsPageService = meinsPageService;
        this.isDarkModeOn = false;
    }
    ngOnInit() {
        this.isDarkModeOn = this.meinsPageService.isDarkmode.getValue();
    }
    navigateToAboutMePage() {
        this.router.navigate(['tabs/tab4/aboutMe']);
    }
    toggleDarkMode() {
        const systemDark = window.matchMedia('(prefers-color-scheme: dark)');
        // systemDark.addListener(this.colorTest);
        if (this.isDarkModeOn) {
            localStorage.setItem('prefers-color', 'dark');
            document.body.setAttribute('data-theme', 'dark');
        }
        else {
            localStorage.setItem('prefers-color', 'light');
            document.body.setAttribute('data-theme', 'light');
        }
    }
};
MeinsPage = __decorate([
    Component({
        selector: 'app-tab4',
        templateUrl: 'meins-page.component.html',
        styleUrls: ['meins-page.component.scss']
    })
], MeinsPage);
export { MeinsPage };
//# sourceMappingURL=meins-page.component.js.map