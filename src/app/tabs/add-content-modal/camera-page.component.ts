import {Component, OnInit} from '@angular/core';
import {ActionSheetController, ModalController, NavController} from '@ionic/angular';

import {CameraSource, Plugins} from '@capacitor/core';
import {CameraService} from './camera.service';
import {UserService} from '../../core/services/user.service';

const {Camera, Filesystem, Storage} = Plugins;

@Component({
    selector: 'app-camera-modal',
    templateUrl: './camera-page.component.html',
    styleUrls: ['./camera-page.component.scss'],
})
export class CameraPage implements OnInit {

    selectedFiles: FileList;
    file: File;
    imgsrc;
    progressBarValue;
    
    public fangZeit: string = new Date().toISOString();
    cm: number;

    constructor(private modalCtrl: ModalController,
                public photoService: CameraService,
                public actionSheetController: ActionSheetController,
                private userService: UserService) {
    }

    ngOnInit() {

    }


    public async showActionSheet(photo, position) {
        const actionSheet = await this.actionSheetController.create({
            header: 'Photos',
            buttons: [{
                text: 'Delete',
                role: 'destructive',
                icon: 'trash',
                handler: () => {
                    this.photoService.deletePicture(photo, position);
                }
            }, {
                text: 'Cancel',
                icon: 'close',
                role: 'cancel',
                handler: () => {
                    // Nothing to do, action sheet is automatically closed
                }
            }]
        });
        await actionSheet.present();
    }


    getCurrentDate() {
        const date = new Date();
        const dateC = date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();
        const time = date.getHours() + ':' + date.getMinutes();
        // this.fangZeit = dateC + ' - ' + time;
    }
}
