import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthComponent} from './auth.component';

const routes: Routes = [
    {
        path: '', component: AuthComponent,
        children: [
            {
                path: 'register',
                loadChildren: () => import('./registration/register-page.module').then(m => m.RegisterPageModule)
            },
        ]
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {
}
