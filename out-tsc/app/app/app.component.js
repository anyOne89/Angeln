import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AppComponent = class AppComponent {
    constructor(platform, splashScreen, statusBar, meinsPageService) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.meinsPageService = meinsPageService;
        this.initializeApp();
        this.initDarkMode();
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
    initDarkMode() {
        if (localStorage.getItem('prefers-color') === 'light') {
            this.meinsPageService.setDarkModeFromPersistence(false);
            document.body.setAttribute('data-theme', 'light');
        }
        else {
            this.meinsPageService.setDarkModeFromPersistence(true);
            document.body.setAttribute('data-theme', 'dark');
        }
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: 'app.component.html',
        styleUrls: ['app.component.scss']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map