import {Component, EventEmitter} from '@angular/core';
import {ActionSheetController, ModalController} from '@ionic/angular';
import {CameraPage} from './add-content-modal/camera-page.component';
import {Router} from '@angular/router';
import {UserService} from '../core/services/user.service';
import {CameraService} from './add-content-modal/camera.service';
import {CameraSource} from "@capacitor/core";

@Component({
    selector: 'app-tabs',
    templateUrl: 'tabs.page.html',
    styleUrls: ['tabs.page.scss']
})
export class TabsPage {
    public isCameraTabSelected: boolean;
    private lastTabBeforeCamera: string;

    constructor(public modalController: ModalController,
                public router: Router,
                public cameraService: CameraService,
                public actionSheetController: ActionSheetController) {
    }


    transition($event: { tab: string }) {
        if ($event.tab === 'camera') {
            this.isCameraTabSelected = true;
        } else {
            this.isCameraTabSelected = false;
            this.lastTabBeforeCamera = $event.tab;
        }
    }


    async showImageActionSheet() {
        const actionSheet = await this.actionSheetController.create({
            header: 'Action',
            buttons: [
                {
                    text: 'Einchecken zum Angeln',
                    icon: 'locate-outline',
                    handler: () => {
                        this.cameraService.pickImage(CameraSource.Camera);
                    }
                },
                {
                    text: 'Load from Library',
                    icon: 'folder',
                    handler: () => {
                        this.cameraService.pickImage(CameraSource.Photos);
                    }
                },
                {
                    text: 'Use Camera',
                    icon: 'camera',
                    handler: () => {
                        this.cameraService.pickImage(CameraSource.Camera);
                    }
                },
                {
                    text: 'Cancel',
                    icon: 'close',
                    role: 'cancel',
                    handler: () => {
                        this.router.navigate(['tabs/' + this.lastTabBeforeCamera]);
                    }
                }
            ]
        });
        await actionSheet.present();
    }
}
