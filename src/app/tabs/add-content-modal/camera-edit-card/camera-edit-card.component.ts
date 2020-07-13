import {Component, OnInit} from '@angular/core';
import {CameraService} from '../camera.service';
import {ActionSheetController} from '@ionic/angular';
import {AngularFireStorage} from '@angular/fire/storage';

@Component({
    selector: 'app-camera-edit-card',
    templateUrl: './camera-edit-card.component.html',
    styleUrls: ['./camera-edit-card.component.scss'],
})
export class CameraEditCardComponent implements OnInit {

    constructor(public photoService: CameraService,
                public actionSheetController: ActionSheetController,
                private afStorage: AngularFireStorage) {
    }

    ngOnInit() {
    }


    async uploadFile() {

        // this.afStorage.upload('/upload/to/this-path'

    }


}
