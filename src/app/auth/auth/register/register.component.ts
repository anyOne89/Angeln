import {Component, OnInit} from '@angular/core';
import {IonInput} from '@ionic/angular';
import {UserService} from '../../../core/services/user.service';
import {Router} from '@angular/router';
import {User} from '../../../core/models/user';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

    readonly userDBSammlung = 'users';
    usersRef: AngularFirestoreCollection<User>;

    constructor(public userService: UserService, private router: Router,
                private afs: AngularFirestore) {
    }

    ngOnInit() {
        this.usersRef = this.afs.collection<User>(this.userDBSammlung);
    }

    signUp(name: IonInput, email: IonInput, password: IonInput) {
        this.userService.signUp(email.value, password.value).then(res => {
            this.router.navigate(['tabs']);

            const user: User = {
                email: res.user.email.toString(),
                name: name.value.toString(),
                userUid: res.user.uid.toString(),
                rank: 'Jungfischer'
            };

            this.usersRef.add(user);
        });
    }
}
