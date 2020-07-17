import {Injectable, NgZone} from '@angular/core';
import {Observable, Subscriber} from 'rxjs';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import * as firebase from 'firebase';
import UserCredential = firebase.auth.UserCredential;
import {auth} from 'firebase';
import {AngularFireStorage, AngularFireUploadTask} from "@angular/fire/storage";


@Injectable()
export class FirebaseAddContentService {


    task: AngularFireUploadTask;
    progress: Observable<number | undefined>;  // Observable 0 to 100
    image: string; // base64

    constructor(
        private storage: AngularFireStorage,
        public ngFireAuth: AngularFireAuth,
        public ngZone: NgZone,
    ) {


    }


    public commit() {

        // const filePath = `user/${this.userService.getUserEmail()}/catchfish/${new Date().getTime()}.jpg`;
        // this.image = 'data:image/jpg;base64,' + imageData.base64String;
        // this.task = this.storage.ref(filePath).putString(this.image, 'data_url');
        // this.progress = this.task.percentageChanges();

    }

}
