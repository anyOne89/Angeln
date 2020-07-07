import {Component, Renderer2, RendererFactory2} from '@angular/core';
import {UserService} from '../../core/services/user.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-tab4',
    templateUrl: 'meins-page.component.html',
    styleUrls: ['meins-page.component.scss']
})
export class MeinsPage {

    private colorScheme: string;


    private renderer: Renderer2;

    // Define prefix for clearer and more readable class names in scss files
    private colorSchemePrefix = 'color-scheme-';

    constructor(public userService: UserService, public router: Router, rendererFactory: RendererFactory2) {
        // Create new renderer from renderFactory, to make it possible to use renderer2 in a service
        this.renderer = rendererFactory.createRenderer(null, null);
    }


    showAboutMe() {
        this.router.navigate(['tabs/tab4/aboutMe']);
    }

    onClick($event) {

        const systemDark = window.matchMedia('(prefers-color-scheme: dark)');
        systemDark.addListener(this.colorTest);
        if (event.detail.checked) {
            document.body.setAttribute('data-theme', 'dark');
        } else {
            document.body.setAttribute('data-theme', 'light');
        }

    }

    colorTest(systemInitiatedDark) {
        if (systemInitiatedDark.matches) {
            document.body.setAttribute('data-theme', 'dark');
        } else {
            document.body.setAttribute('data-theme', 'light');
        }
    }

    // setColorScheme(scheme) {
    //     this.colorScheme = scheme;
    //     // Save prefers-color-scheme to localStorage
    //     localStorage.setItem('prefers-color', scheme);
    // }
    //
    // load() {
    //     this.getColorScheme();
    //     this.renderer.addClass(document.body, this.colorSchemePrefix + this.colorScheme);
    // }
    //
    // getColorScheme() {
    //     // Check if any prefers-color-scheme is stored in localStorage
    //     if (localStorage.getItem('prefers-color')) {
    //         // Save prefers-color-scheme from localStorage
    //         this.colorScheme = localStorage.getItem('prefers-color');
    //     } else {
    //         // If no prefers-color-scheme is stored in localStorage, try to detect OS default prefers-color-scheme
    //         this.detectPrefersColorScheme();
    //     }
    // }
    //
    // detectPrefersColorScheme() {
    //     // Detect if prefers-color-scheme is supported
    //     if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
    //         // Set colorScheme to Dark if prefers-color-scheme is dark. Otherwise set to light.
    //         this.colorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    //     } else {
    //         // If the browser doesn't support prefers-color-scheme, set it as default to dark
    //         this.colorScheme = 'dark';
    //     }
    // }
    //
    // update(scheme) {
    //     this.setColorScheme(scheme);
    //     // Remove the old color-scheme class
    //     this.renderer.removeClass(document.body, this.colorSchemePrefix + (this.colorScheme === 'dark' ? 'light' : 'dark'));
    //     // Add the new / current color-scheme class
    //     this.renderer.addClass(document.body, this.colorSchemePrefix + scheme);
    // }

}
