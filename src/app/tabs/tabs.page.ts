import {Component, EventEmitter} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {CameraPage} from './add-content-modal/camera-page.component';
import {Router} from '@angular/router';
import {UserService} from '../core/services/user.service';
import {CameraService} from './add-content-modal/camera.service';

@Component({
    selector: 'app-tabs',
    templateUrl: 'tabs.page.html',
    styleUrls: ['tabs.page.scss']
})
export class TabsPage {
    public isCameraTabSelected: boolean;

    constructor(public modalController: ModalController,
                public router: Router,
                public cameraService: CameraService) {
    }


    transition($event: { tab: string }) {
        if ($event.tab === 'camera') {
            this.isCameraTabSelected = true;
        } else {
            this.isCameraTabSelected = false;
        }
    }
}
