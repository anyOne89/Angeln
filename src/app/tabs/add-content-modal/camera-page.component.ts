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


    // chooseFiles(event) {
    //     //     //     this.selectedFiles = event.target.files;
    //     //     //     if (this.selectedFiles.item(0)) {
    //     //     //         this.uploadpic();
    //     //     //     }
    //     //     // }
    //     //     //
    //     //     // uploadpic() {
    //     //     //     const file = this.selectedFiles.item(0);
    //     //     //     const uploadTask = this.storage.upload('/card-fische/' + this.userService.getUserEmail(), file);
    //     //     //
    //     //     //     const uploadTasks =  `/card-fische//${new Date().getTime()}_${name}`;
    //     //     //
    //     //     //
    //     //     //
    //     //     //     this.imgsrc = uploadTask.percentageChanges();
    //     //     //
    //     //     //     uploadTask.percentageChanges().subscribe((value) => {
    //     //     //         this.progressBarValue = value.toFixed(2);
    //     //     //     });
    //     //     // }


    uploadFileAndGetMetadata(mediaFolderPath: string, fileToUpload: File): FilesUploadMetadata {
        const {name} = fileToUpload;
        const filePath = `${mediaFolderPath}/${new Date().getTime()}_${name}`;
        const uploadTask: AngularFireUploadTask = this.storage.upload(filePath, fileToUpload);


        return {
            downloadUrl$: undefined,
            uploadProgress$: uploadTask.percentageChanges()
        };
    }

}

export interface FilesUploadMetadata {
    uploadProgress$: Observable<number>;
    downloadUrl$: Observable<string>;
}
