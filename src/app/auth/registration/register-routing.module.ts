import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RegistrationPage} from './register-page.component';

const routes: Routes = [
    {
        path: '', component: RegistrationPage,     // canActivate: [NoAuthGuard]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RegisterRoutingModule {
}
