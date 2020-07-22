import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouteReuseStrategy, RouterModule, Routes} from '@angular/router';
import {CameraPage} from './camera-page.component';
import {MeinsPageService} from '../meins/meins-page.service';
import {UserService} from '../../core/services/user.service';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {CameraService} from './camera.service';
import {CameraEditCardComponent} from './camera-edit-card/camera-edit-card.component';
import {FormsModule} from '@angular/forms';
import {FischArtComponent} from './camera-edit-card/fisch-art/fisch-art.component';
import {SichtbarkeitComponent} from "./camera-edit-card/sichtbarkeit/sichtbarkeit.component";

const routes: Routes = [
    {
        path: '', component: CameraPage,
    },
    {
        path: 'edit', component: CameraEditCardComponent,
    },
    {
        path: 'fishArt', component: FischArtComponent,
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        IonicModule,
        FormsModule
    ],

    declarations: [CameraPage, CameraEditCardComponent, FischArtComponent, SichtbarkeitComponent],
    providers: [
    ],
})
export class CameraModule {
}
