import {Injectable, NgZone} from '@angular/core';
import {BehaviorSubject, Observable, Subject, Subscriber} from 'rxjs';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import * as firebase from 'firebase';
import UserCredential = firebase.auth.UserCredential;
import {auth} from 'firebase';


@Injectable()
export class MeinsPageService {

    isDarkmode: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor() {


    }


    setDarkModeFromPersistence(isDarkMode: boolean) {
        this.isDarkmode.next(isDarkMode);
    }
}
