import {Component, OnInit} from '@angular/core';
import {ActionSheetController, ModalController} from '@ionic/angular';

import {Plugins} from '@capacitor/core';
import {CameraService} from './camera.service';

const {Camera, Filesystem, Storage} = Plugins;

@Component({
    selector: 'app-camera-modal',
    templateUrl: './camera-page.component.html',
    styleUrls: ['./camera-page.component.scss'],
})
export class CameraPage implements OnInit {

    constructor(private modalCtrl: ModalController,
                public photoService: CameraService,
                public actionSheetController: ActionSheetController) {
    }

    ngOnInit() {

    }


    selectPhoto(): void {


    }

