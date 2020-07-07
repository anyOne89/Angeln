import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

import {
    Plugins, CameraResultType, Capacitor, FilesystemDirectory,
    CameraPhoto, CameraSource
} from '@capacitor/core';

const {Camera, Filesystem, Storage} = Plugins;

@Component({
    selector: 'app-camera-modal',
    templateUrl: './camera-modal.page.html',
    styleUrls: ['./camera-modal.page.scss'],
})
export class CameraModalPage implements OnInit {

    public photos: Photo[] = [];

    constructor(private modalCtrl: ModalController) {
    }

    ngOnInit() {

    }

    dismissModal() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalCtrl.dismiss();

    }

    segmentChanged($event: CustomEvent) {

    }

    public async addNewToGallery() {
        // Take a photo
        const capturedPhoto = await Camera.getPhoto({
            resultType: CameraResultType.Uri,
            source: CameraSource.Camera,
            quality: 100
        });


        // this.photos.unshift({
        //     filepath: "soon...",
        //     webviewPath: capturedPhoto.webPath
        // });
    }

    take() {
        this.addNewToGallery();
    }
}
