import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { FormsModule } from '@angular/forms';
import { UserService } from './core/services/user.service';
import { firebaseConfig } from '../environments/environment';
import { AuthPageModule } from './auth/auth-page.module';
import { MeinsPageService } from './tabs/meins/meins-page.service';
import { CameraModule } from './tabs/add-content-modal/camera.module';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [AppComponent],
        entryComponents: [],
        imports: [
            BrowserModule,
            FormsModule,
            IonicModule.forRoot(),
            AngularFireAuthModule,
            AngularFireDatabaseModule,
            AngularFirestoreModule,
            AngularFireModule.initializeApp(firebaseConfig),
            // modules
            AppRoutingModule,
            AuthPageModule,
            CameraModule
        ],
        providers: [
            MeinsPageService,
            UserService,
            StatusBar,
            SplashScreen,
            { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
        ],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map