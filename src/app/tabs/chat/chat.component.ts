import {Component} from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";

@Component({
    selector: 'app-tab3',
    templateUrl: 'chat.component.html',
    styleUrls: ['chat.component.scss']
})
export class ChatComponent {

    // https://github.com/moeidsaleem/angularfire-chat/blob/master/src/app/services/api/api.service.ts
    constructor(private afs: AngularFirestore) {
    }


    public getUsers() {
        return this.afs.collection<any>('users').snapshotChanges();
    }

    getChat(chatId) {
        return this.afs.collection('conversations', ref => ref.where('chatId', '==', chatId)).valueChanges();
    }
}
