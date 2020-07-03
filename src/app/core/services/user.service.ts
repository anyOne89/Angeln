import {Injectable, NgZone} from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import * as firebase from 'firebase';
import UserCredential = firebase.auth.UserCredential;
import {auth} from 'firebase';


@Injectable()
export class UserService {

    userData: any;
    user: Observable<firebase.User>;

    constructor(
        public afStore: AngularFirestore,
        public ngFireAuth: AngularFireAuth,
        public router: Router,
        public ngZone: NgZone
    ) {

        this.ngFireAuth.authState.subscribe(user => {
            console.log('authState.subscribe: ', user);

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
    // signup(email: string, password: string): Promise<any> {
    //     return new Promise((resolve, reject) => {
    //
    //         this.ngFireAuth.createUserWithEmailAndPassword(email, password).then(value => {
    //             console.log('Success!', value);
    //             resolve(value);
    //         }).catch(err => {
    //             console.log('Something went wrong:', err.message);
    //         });
    //     });
    // }

    // Register user with email/password
    registerUser(email, password) {
        return this.ngFireAuth.createUserWithEmailAndPassword(email, password);
    }

    login(email: string, password: string): Promise<UserCredential> {
        return new Promise((resolve, reject) => {
            this.ngFireAuth.signInWithEmailAndPassword(email, password).then(value => {
                console.log('Nice, it worked!');
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
    //
    // // Sign-out
    // signOut() {
    //     return this.ngFireAuth.auth.signOut().then(() => {
    //         localStorage.removeItem('user');
    //         this.router.navigate(['login']);
    //     })
    // }
    //
    //
    // // Recover password
    // PasswordRecover(passwordResetEmail) {
    //     return this.ngFireAuth.sendPasswordResetEmail(passwordResetEmail)
    //         .then(() => {
    //             window.alert('Password reset email has been sent, please check your inbox.');
    //         }).catch((error) => {
    //             window.alert(error)
    //         })
    // }
    //
    // // Returns true when user is looged in
    // get isLoggedIn(): boolean {
    //     const user = JSON.parse(localStorage.getItem('user'));
    //     return (user !== null && user.emailVerified !== false) ? true : false;
    // }
    //
    // // Returns true when user's email is verified
     get isEmailVerified(): boolean {
         const user = JSON.parse(localStorage.getItem('user'));
         return (user.emailVerified !== false) ? true : false;
     }

    signInWithGoogle() {
        const provider = new auth.GoogleAuthProvider();
        const scopes = ['profile', 'email'];
        return this.socialSignIn(provider.providerId, scopes);
    }

    socialSignIn(providerName: string, scopes?: Array<string>): Promise<any> {
        const provider = new auth.OAuthProvider(providerName);

        // add any permission scope you need
        if (scopes) {
            scopes.forEach(scope => {
                provider.addScope(scope);
            });
        }

        // if (this.platform.is('desktop')) {
        return this.ngFireAuth.signInWithPopup(provider);
        // } else {
        //     // web but not desktop, for example mobile PWA
        //     return this.ngFireAuth.signInWithRedirect(provider);
        // }
    }



    //
    // // Email verification when new user register
    // SendVerificationMail() {
    //     return this.ngFireAuth.auth.currentUser.sendEmailVerification()
    //         .then(() => {
    //             this.router.navigate(['verify-email']);
    //         })
    // }
    //
    //
    // // Sign in with Gmail
    // GoogleAuth() {
    //     return this.ngFireAuth.AuthLogin(new auth.GoogleAuthProvider());
    // }
}
