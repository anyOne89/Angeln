import {Injectable, NgZone} from '@angular/core';
import {HttpParams} from '@angular/common/http';
import {BehaviorSubject, Observable, ReplaySubject} from 'rxjs';

import {ApiService} from './api.service';

import {distinctUntilChanged, map} from 'rxjs/operators';
import {Buffer} from 'buffer';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import * as firebase from 'firebase';


@Injectable()
export class UserService {

    user: Observable<firebase.User>;

    private currentUserSubject = new BehaviorSubject<User>({} as User);
    public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

    private isAuthenticatedSubject: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);
    public isAuthenticated: Observable<boolean> = this.isAuthenticatedSubject.asObservable();

    constructor(
        private apiService: ApiService,
        private credentialsService: CredentialsService,
        private authService: AuthService,
        public afStore: AngularFirestore, public ngFireAuth: AngularFireAuth, public router: Router, public ngZone: NgZone
    ) {

    }


    // EMAIL & PW
    signup(email: string, password: string) {
        this.ngFireAuth
            .createUserWithEmailAndPassword(email, password)
            .then(value => {
                console.log('Success!', value);
            })
            .catch(err => {
                console.log('Something went wrong:', err.message);
            });
    }

    login(email: string, password: string) {
        this.ngFireAuth
            .signInWithEmailAndPassword(email, password)
            .then(value => {
                console.log('Nice, it worked!');
            })
            .catch(err => {
                console.log('Something went wrong:', err.message);
            });
    }


    logout() {
        this.ngFireAuth.signOut();
    }


    populate() {

        if (this.credentialsService.getToken()) {
            this.setAuth(this.credentialsService.getToken());
        } else {
            this.purgeAuth();
        }
    }


    /**Remove any potential remnants of previous auth states */
    purgeAuth() {
        this.credentialsService.destroyToken();
        // Set current user to an empty object
        this.currentUserSubject.next({} as User);
        // Set auth status to false
        this.isAuthenticatedSubject.next(false);

        this.authService.isAuthRunning.next(false);
    }

    attemptAuth(type: string, credentials: string): Observable<any> {
        this.authService.isAuthRunning.next(true);
        const route = (type === 'login') ? '/checkAuth' : '';

        const params = new HttpParams()
            .set('auth', credentials)
            .set('timestamp', new Date().getMilliseconds().toString())
            .set('jiraRestApiUrl', getDefaultJiraConfig().root + 'rest/');

        return this.apiService.getResponseTypeText(`/api` + route, params)
            .pipe(map(
                data => {
                    this.authService.isAuthRunning.next(false);
                    if (!this.credentialsService.getToken()) {
                        this.setAuth(credentials);
                    }
                }
            ));
    }

    setAuth(credentials: string) {
        const codedCredentials = new Buffer(credentials, 'base64').toString();
        const cred = codedCredentials.split(':');

        this.credentialsService.saveCredentials(credentials);
        // Set current user data into observable
        this.currentUserSubject.next(new User(cred[0]));
        // Set isAuthenticated to true
        this.isAuthenticatedSubject.next(true);
    }

    getCurrentUser(): Observable<User> {
        return this.currentUser;
    }
}
