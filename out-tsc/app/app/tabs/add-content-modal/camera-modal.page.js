import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Camera, Filesystem, Storage } = Plugins;
let CameraModalPage = class CameraModalPage {
    constructor(modalCtrl, photoService) {
        this.modalCtrl = modalCtrl;
        this.photoService = photoService;
    }
    ngOnInit() {
    }
    dismissModal() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalCtrl.dismiss();
    }
    segmentChanged($event) {
    }
    addPhotoToGallery() {
        this.photoService.addNewToGallery();
    }
};
CameraModalPage = __decorate([
    Component({
        selector: 'app-camera-modal',
        templateUrl: './camera-page.component.html',
        styleUrls: ['./camera-page.component.scss'],
    })
], CameraModalPage);
export { CameraModalPage };
//# sourceMappingURL=camera-modal.page.js.map
