import {NgModule} from '@angular/core';
import {RegistrationPage} from './register-page.component';
import {RegisterRoutingModule} from './register-routing.module';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';


@NgModule({
    imports: [
        CommonModule,
        RegisterRoutingModule,
        RouterModule.forChild([{ path: '', component: RegistrationPage }]),
    ],
    declarations: [RegistrationPage]
})
export class RegisterPageModule {
}
