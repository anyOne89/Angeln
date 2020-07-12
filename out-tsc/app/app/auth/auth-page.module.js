import { __decorate } from "tslib";
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { AuthComponent } from './auth/auth.component';
import { RouterModule } from '@angular/router';
import { RegisterModule } from './auth/register/register.module';
import { NoAuthGuard } from './no-auth-guard.service';
const authRoutes = [
    {
        path: 'auth', component: AuthComponent, canActivate: [NoAuthGuard]
    },
    {
        path: 'register',
        loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule),
        canActivate: [NoAuthGuard]
    }
];
let AuthPageModule = class AuthPageModule {
};
AuthPageModule = __decorate([
    NgModule({
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
], AuthPageModule);
export { AuthPageModule };
//# sourceMappingURL=auth-page.module.js.map