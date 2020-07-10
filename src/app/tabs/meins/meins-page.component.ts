import {Component, OnInit, Renderer2, RendererFactory2} from '@angular/core';
import {UserService} from '../../core/services/user.service';
import {Router} from '@angular/router';
import {MeinsPageService} from "./meins-page.service";

@Component({
    selector: 'app-tab4',
    templateUrl: 'meins-page.component.html',
    styleUrls: ['meins-page.component.scss']
})
export class MeinsPage implements OnInit {

    constructor(public userService: UserService, public router: Router, private meinsPageService: MeinsPageService) {
    }

    private isDarkModeOn = false;

    ngOnInit(): void {
        this.isDarkModeOn = this.meinsPageService.isDarkmode.getValue();
    }

    navigateToAboutMePage() {
        this.router.navigate(['tabs/tab4/aboutMe']);
    }

    toggleDarkMode() {
        const systemDark = window.matchMedia('(prefers-color-scheme: dark)');
        // systemDark.addListener(this.colorTest);

        if (this.isDarkModeOn) {
            localStorage.setItem('prefers-color', 'dark')
            document.body.setAttribute('data-theme', 'dark');
        } else {
            localStorage.setItem('prefers-color', 'light')
            document.body.setAttribute('data-theme', 'light');
        }
    }

    // private detectPrefersColorScheme() {
    //     console.log(' window.matchMedia((prefers-color-scheme)) ', window.matchMedia('(prefers-color-scheme)'));
    //
    //     if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
    //         this.colorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    //     } else {
    //         this.colorScheme = 'dark';
    //     }
    // }

    // colorTest(systemInitiatedDark) {
    //     if (systemInitiatedDark.matches) {
    //         document.body.setAttribute('data-theme', 'dark');
    //     } else {
    //         document.body.setAttribute('data-theme', 'light');
    //     }
    // }


}
