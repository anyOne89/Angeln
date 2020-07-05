import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthComponent} from './auth/auth.component';
import {RouterModule, Routes} from '@angular/router';
import {RegisterModule} from './auth/register/register.module';
import {NoAuthGuard} from './no-auth-guard.service';


const authRoutes: Routes = [
    {
        path: 'auth', component: AuthComponent, canActivate: [NoAuthGuard]
    },
    {
        path: 'register',
        loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule),
        canActivate: [NoAuthGuard]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(authRoutes),
        RegisterModule,
        IonicModule,
    ],
    declarations: [AuthComponent],
    exports: [
        RouterModule
    ]
})
export class AuthPageModule {
}
