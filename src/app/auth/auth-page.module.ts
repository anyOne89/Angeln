import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {AuthComponent} from './auth/auth.component';
import {RouterModule, Routes} from '@angular/router';
import {RegisterModule} from './auth/register/register.module';
import {AuthGuard} from './auth-guard.service';


const authRoutes: Routes = [
    {
        path: 'auth', component: AuthComponent, canActivate: [AuthGuard]
    },
    {
        path: 'register',
        loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule),
        canActivate: [AuthGuard]
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
