import {Component, OnInit} from '@angular/core';
import {ActionSheetController, LoadingController, ModalController} from '@ionic/angular';

import {CameraSource, Plugins} from '@capacitor/core';
import {CameraService} from './camera.service';
import {UserService} from '../../core/services/user.service';
import {AngularFireStorage} from '@angular/fire/storage';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {FirebaseAddContentService} from '../../core/services/firebase-add-content.service';
import {Router} from '@angular/router';

const {Camera, Filesystem, Storage} = Plugins;


@Component({
    selector: 'app-camera-modal',
    templateUrl: './camera-page.component.html',
    styleUrls: ['./camera-page.component.scss'],
})
export class CameraPage implements OnInit {

    constructor(private modalCtrl: ModalController,
                public photoService: CameraService,
                public actionSheetController: ActionSheetController,
                public storage: AngularFireStorage,
                private userService: UserService,
                public afs: AngularFirestore,
                public loadingController: LoadingController,
                private router: Router
    ) {
    }

    imageText: string;
    angelDuGeradeHier: boolean;
    fischGroese: number;
    public fangZeit: string = new Date().toISOString();

    // upload image
    readonly cardDBSammlung = 'card';
    newsItem: NewsIten;
    newsItemRef: AngularFirestoreCollection<NewsIten>;

    loading: HTMLIonLoadingElement;

    //// UPLOAD ///////////////////////////

    // getCurrentDate() {
    //     const date = new Date();
    //     const dateC = date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();
    //     const time = date.getHours() + ':' + date.getMinutes();
    //     // this.fangZeit = dateC + ' - ' + time;
    // }

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


    ngOnInit() {
        // TODO: better use userId
        this.newsItemRef = this.afs.collection<NewsIten>('card');
    }


    public async showActionSheet(photo, position) {
        const actionSheet = await this.actionSheetController.create({
            header: 'Photos',
            buttons: [
                {
                    text: 'Delete',
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

    commitToFireBase() {
        this.presentLoading();

        this.photoService.commitCatch().then(onFullfilled => {

            this.newsItem = {
                date: this.fangZeit,
                fischArt: 'Hecht',
                fischGroese: this.fischGroese,
                userID: '',
                userImageUrl: '',
                userName: 'johann',
                fishImageUrl: onFullfilled.metadata.fullPath
            };

            this.newsItemRef.add(this.newsItem).then(res => {
                this.loading.dismiss();
            });
        });
    }

    async presentLoading() {
        this.loading = await this.loadingController.create({
            //  cssClass: 'my-custom-class',
            message: 'Bild wird hochgeladen bitte warten...',
            // duration: 2000
        });

        await this.loading.present();

        const {role, data} = await this.loading.onDidDismiss();
        console.log('Loading dismissed!');
    }

    close() {
        // this.router.navigate(['tabs/' + this.lastTabBeforeCamera]);
        this.router.navigate(['tabs']);
    }

    addPhotoFromCamera() {
        this.photoService.pickImage(CameraSource.Camera);
    }

    addPhotoFromGallery() {
        this.photoService.pickImage(CameraSource.Photos);
    }

    navigateToFishArtPage() {
        this.router.navigate(['tabs/camera/fishArt']);
    }
}
