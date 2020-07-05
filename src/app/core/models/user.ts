import {Data} from '@angular/router';

export interface User {
    userUid: string;
    name: string;
    email: string;

    registerDate?: Date;


    rank?: string;

    birthDay?: Date;
    photoURL?: string;
    aboutMe?: string;
    interessen?: string;
    verein?: string;
}
