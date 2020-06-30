import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';


import {TabsPage} from './tabs.page';
import {AuthComponent} from "./auth.component";

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
    ],
    declarations: [AuthComponent]
})
export class AuthPageModule {
}
