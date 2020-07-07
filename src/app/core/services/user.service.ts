import {Injectable, NgZone} from '@angular/core';
import {Observable, Subscriber} from 'rxjs';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import * as firebase from 'firebase';
import UserCredential = firebase.auth.UserCredential;
import {auth} from 'firebase';


@Injectable()
export class UserService {

    private userData: any;
    private user: Observable<firebase.User>;

    constructor(
        public afStore: AngularFirestore,
        public ngFireAuth: AngularFireAuth,
        public router: Router,
        public ngZone: NgZone,
    ) {

        this.ngFireAuth.authState.subscribe(user => {
            if (user) {
                this.userData = user;
                localStorage.setItem('user', JSON.stringify(this.userData));
                JSON.parse(localStorage.getItem('user'));
            } else {
                localStorage.setItem('user', null);
                JSON.parse(localStorage.getItem('user'));
            }
        });

    }


    // // EMAIL & PW
    signUp(email, password): Promise<UserCredential> {
        return new Promise((resolve, reject) => {
            this.ngFireAuth.createUserWithEmailAndPassword(email, password).then(value => {
                resolve(value);
                // this.SendVerificationMail().then(res => {
                //
                // });
            }).catch(err => {
                console.log('Something went wrong:', err.message);
            });
        });
    }


    login(email, password): Promise<UserCredential> {
        return new Promise((resolve, reject) => {
            this.ngFireAuth.signInWithEmailAndPassword(email, password).then(value => {
                resolve(value);
            }).catch(err => {
                console.log('Something went wrong:', err.message);
            });
        });
    }

    // // Store user in localStorage
    // setUserData(user) {
    //     const userRef: AngularFirestoreDocument<any> = this.afStore.doc(`users/${user.uid}`);
    //     const userData: User = {
    //         email: user.email,
    //         displayName: user.displayName,
    //         photoURL: user.photoURL,
    //         emailVerified: user.emailVerified
    //     }
    //     return userRef.set(userData, {
    //         merge: true
    //     })
    // }

    // Sign-out
    signOut() {
        return this.ngFireAuth.signOut().then(() => {
            localStorage.removeItem('user');
            this.router.navigate(['auth']);
        });
    }

    // // Recover password
    PasswordRecover(passwordResetEmail) {
        return this.ngFireAuth.sendPasswordResetEmail(passwordResetEmail)
            .then(() => {
                window.alert('Password reset email has been sent, please check your inbox.');
            }).catch((error) => {
                window.alert(error);
            });
    }

    // Returns true when user is looged in
    get isLoggedIn(): Observable<boolean> {
        const user = JSON.parse(localStorage.getItem('user'));
        return new Observable((observer: Subscriber<boolean>): void => {
            observer.next(user !== null);
            // return (user !== null && user.emailVerified !== false) ? true : false;
        });
    }

    // // Returns true when user's email is verified
    get isEmailVerified(): boolean {
        const user = JSON.parse(localStorage.getItem('user'));
        return (user.emailVerified !== false) ? true : false;
    }

    // Email verification when new user register
    SendVerificationMail() {
        return this.ngFireAuth.currentUser.then(user => {
            user.sendEmailVerification().then(res => {

                this.router.navigate(['verify-email']);
            });
        });
    }


// Sign in with Gmail
    GoogleAuth() {
        return this.authLogin(new auth.GoogleAuthProvider());
    }

    // Auth providers
    private authLogin(provider) {
        return this.ngFireAuth.signInWithPopup(provider)
            .then((result) => {
                this.ngZone.run(() => {
                    this.router.navigate(['tabs']);
                });
                // this.SetUserData(result.user);
            }).catch((error) => {
                window.alert(error);
            });
    }


    getUserEmail() {
        const user = JSON.parse(localStorage.getItem('user'));
        return user.email;
    }


    updateUser(userKey, value) {
        // value.nameToSearch = value.name.toLowerCase();
        // return this.db.collection('users').doc(userKey).set(value);
    }

    searchUsersByAge(value) {
        // return this.db.collection('users',ref >
        //     ref.orderBy('age').startAt(value)).snapshotChanges();
    }

    searchUsers(searchValue) {
        // return this.db.collection('users',ref => ref.where('nameToSearch', '>=', searchValue)
        //     .where('nameToSearch', '<=', searchValue + '\uf8ff'))
        //     .snapshotChanges()
    }

    searchByName() {
        // let value = this.searchValue.toLowerCase();
        // this.firebaseService.searchUsers(value)
        //     .subscribe(result => {
        //         this.name_filtered_items = result;
        //         this.items = this.combineLists(result, this.age_filtered_items);
        //     })
    }


}
