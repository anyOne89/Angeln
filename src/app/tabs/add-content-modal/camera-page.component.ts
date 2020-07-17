import {Component, OnInit} from '@angular/core';
import {ActionSheetController, ModalController} from '@ionic/angular';

import {Plugins} from '@capacitor/core';
import {CameraService} from './camera.service';
import {UserService} from '../../core/services/user.service';
import {AngularFireStorage} from '@angular/fire/storage';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {FirebaseAddContentService} from '../../core/services/firebase-add-content.service';

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
    readonly cardDBSammlung = 'card';
    newsItem: NewsIten;
    newsItemRef: AngularFirestoreCollection<NewsIten>;

    constructor(private modalCtrl: ModalController,
                public photoService: CameraService,
                public actionSheetController: ActionSheetController,
                public storage: AngularFireStorage,
                private userService: UserService,
                public afs: AngularFirestore
    ) {
    }

    ngOnInit() {
        // TODO: better use userId
        this.newsItemRef = this.afs.collection<NewsIten>('card');
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


    // async uploadHandler() {
    //     const base64 = await this.captureImage();
    //     this.createUploadTask(base64.base64String);
    // }
    //
    // async captureImage() {
    //     const options: CameraOptions = {
    //         resultType: CameraResultType.Base64,
    //         quality: 100,
    //         source: CameraSource.Camera
    //     };
    //
    //     return await Camera.getPhoto(options);
    // }
    //
    // createUploadTask(file: string): void {
    //     const filePath = `user/${this.userService.getUserEmail()}/${new Date().getTime()}.jpg`;
    //     this.image = 'data:image/jpg;base64,' + file;
    //     this.task = this.storage.ref(filePath).putString(this.image, 'data_url');
    //     this.progress = this.task.percentageChanges();
    // }

    commitToFireBase() {
        this.photoService.commitCatch().then(onFullfilled => {
            const fullPath = onFullfilled.metadata.fullPath;

            this.newsItem = {
                date: '', fischArt: '', userID: '', userImageUrl: '',

                userName: 'johann',
                fishImageUrl: fullPath
            };

            this.newsItemRef.add(this.newsItem);
        });
    }
}
