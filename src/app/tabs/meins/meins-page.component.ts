import {Component, OnInit, Renderer2, RendererFactory2} from '@angular/core';
import {UserService} from '../../core/services/user.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-tab4',
    templateUrl: 'meins-page.component.html',
    styleUrls: ['meins-page.component.scss']
})
export class MeinsPage implements OnInit {

    constructor(public userService: UserService, public router: Router) {
    }

    private isDarkModeOn: boolean;

    ngOnInit(): void {

        if (localStorage.getItem('prefers-color') === 'light') {
            localStorage.setItem('prefers-color', 'dark')
            document.body.setAttribute('data-theme', 'dark');
        } else {
            localStorage.setItem('prefers-color', 'light')
            document.body.setAttribute('data-theme', 'light');
        }

        // if (localStorage.getItem('prefers-color') === 'dark') {
        //
        //     document.body.setAttribute('data-theme', 'dark');
        // } else {
        //     document.body.setAttribute('data-theme', 'light');
        // }
        console.log('window.matchMed', window.matchMedia('(prefers-color-scheme: light)'));
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
