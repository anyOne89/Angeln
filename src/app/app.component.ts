import {Component} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {MeinsPageService} from './tabs/meins/meins-page.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {

    private email: string;
    private password: string;

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private meinsPageService: MeinsPageService
    ) {
        this.initializeApp();
        this.initDarkMode();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }


    private initDarkMode() {
        if (localStorage.getItem('prefers-color') === 'light') {
            this.meinsPageService.setDarkModeFromPersistence(false);
            document.body.setAttribute('data-theme', 'light');
        } else {
            this.meinsPageService.setDarkModeFromPersistence(true);
            document.body.setAttribute('data-theme', 'dark');
        }
    }
}
