import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegisterComponent} from './register.component';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from '../auth.component';
import {IonicModule} from '@ionic/angular';

const registerRoutes: Routes = [
    {
        path: '', component: RegisterComponent
    }
];

@NgModule({
    declarations: [RegisterComponent],
    imports: [
        RouterModule.forChild(registerRoutes),
        CommonModule,
        IonicModule
    ],
    exports: [
        RouterModule
    ]
})
export class RegisterModule {
}
