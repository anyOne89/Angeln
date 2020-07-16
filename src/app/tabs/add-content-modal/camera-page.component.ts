import {Component, OnInit} from '@angular/core';
import {ActionSheetController, ModalController} from '@ionic/angular';

import {CameraOptions, CameraResultType, CameraSource, Plugins} from '@capacitor/core';
import {CameraService} from './camera.service';
import {UserService} from '../../core/services/user.service';
import {AngularFireStorage, AngularFireUploadTask} from '@angular/fire/storage';
import {Observable} from 'rxjs';

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


    // upload image
    task: AngularFireUploadTask;
    progress: Observable<number | undefined>;  // Observable 0 to 100
    image: string; // base64

    constructor(private modalCtrl: ModalController,
                public photoService: CameraService,
                public actionSheetController: ActionSheetController,
                public storage: AngularFireStorage,
                private userService: UserService,
    ) {
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


    //// UPLOAD ///////////////////////////

    getCurrentDate() {
        const date = new Date();
        const dateC = date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();
        const time = date.getHours() + ':' + date.getMinutes();
        // this.fangZeit = dateC + ' - ' + time;
    }


    // createUploadTask(): void {
    //     // createUploadTask(file: string): void {
    //
    //     const file = this.photoService.photos[0].base64;
    //
    //     const filePath = `user/${this.userService.getUserEmail()}/${new Date().getTime()}.jpg`;
    //
    //     console.log('filePath', filePath);
    //
    //     this.image = 'data:image/jpg;base64,' + file;
    //     this.task = this.storage.ref(filePath).putString(this.image, 'base64', { contentType: 'image/png' });
    //     this.progress = this.task.percentageChanges();
    // }


    async uploadHandler() {
        const base64 = await this.captureImage();
        this.createUploadTask(base64.base64String);
    }

    async captureImage() {
        const options: CameraOptions = {
            resultType: CameraResultType.Base64,
            quality: 100,
            source: CameraSource.Camera
        };

        return await Camera.getPhoto(options);
    }

    createUploadTask(file: string): void {


        const filePath = `user/${this.userService.getUserEmail()}/${new Date().getTime()}.jpg`;

        this.image = 'data:image/jpg;base64,' + file;
        this.task = this.storage.ref(filePath).putString(this.image, 'data_url');

        this.progress = this.task.percentageChanges();
    }
}
