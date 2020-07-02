import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RegistrationPage} from './registration/register-page.component';
import {AuthComponent} from './auth.component';
import {AuthRoutingModule} from './auth-routing.module';
import {RouterModule} from '@angular/router';
import {ChatComponent} from '../tabs/chat/chat.component';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        AuthRoutingModule,
        RouterModule.forChild([{path: '', component: AuthComponent}]),

    ],
    declarations: [AuthComponent]
})
export class AuthPageModule {
}
