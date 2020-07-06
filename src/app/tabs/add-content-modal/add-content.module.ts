import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddContentModalComponent} from './add-content-modal.component';
import {RouterModule, Routes} from '@angular/router';
import {ChatComponent} from '../chat/chat.component';
import {IonicModule} from '@ionic/angular';

const routes: Routes = [
    {
        path: '',
        component: AddContentModalComponent,
    }
];

@NgModule({
    declarations: [AddContentModalComponent],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        IonicModule,
    ]
})
export class AddContentModule {
}
