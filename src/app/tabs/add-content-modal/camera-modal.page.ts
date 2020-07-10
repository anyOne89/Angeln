import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

import {
    Plugins, CameraResultType, Capacitor, FilesystemDirectory,
    CameraPhoto, CameraSource
} from '@capacitor/core';
import {CameraService} from "./camera.service";

const {Camera, Filesystem, Storage} = Plugins;

@Component({
    selector: 'app-camera-modal',
    templateUrl: './camera-modal.page.html',
    styleUrls: ['./camera-modal.page.scss'],
})
export class CameraModalPage implements OnInit {
    constructor(private modalCtrl: ModalController, public photoService: CameraService ) {
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

    addPhotoToGallery() {
        this.photoService.addNewToGallery();
    }
}
