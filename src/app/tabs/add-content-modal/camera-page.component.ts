import {Component, OnInit} from '@angular/core';
import {ActionSheetController, ModalController} from '@ionic/angular';

import {Plugins} from '@capacitor/core';
import {CameraService} from './camera.service';
import {UserService} from "../../core/services/user.service";
import {from, Observable} from "rxjs";
import {AngularFireUploadTask} from "@angular/fire/storage";
import {switchMap} from "rxjs/operators";

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

    constructor(private modalCtrl: ModalController,
                public photoService: CameraService,
                public actionSheetController: ActionSheetController,
                private userService: UserService) {
    }

    ngOnInit() {

    }


    selectPhoto(): void {

        // https://indepth.dev/implement-file-upload-with-firebase-storage/
    }


}