import {Component, OnInit} from '@angular/core';
import {CameraService} from '../camera.service';
import {ActionSheetController} from '@ionic/angular';
import {AngularFireStorage} from '@angular/fire/storage';
import {UserService} from '../../../core/services/user.service';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
    selector: 'app-camera-edit-card',
    templateUrl: './camera-edit-card.component.html',
    styleUrls: ['./camera-edit-card.component.scss'],
})
export class CameraEditCardComponent implements OnInit {

    constructor(public photoService: CameraService,
                public actionSheetController: ActionSheetController,
                private fireStorage: AngularFireStorage) {
    }

    ngOnInit() {
    }


    async uploadFile() {

        // this.cameraService.photos[0].

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

}
