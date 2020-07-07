import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsPage} from './tabs.page';
import {CameraModalPage} from './add-content-modal/camera-modal.page';
import {IonicModule} from "@ionic/angular";

const routes: Routes = [
    {
        path: '',
        component: TabsPage,
        children: [
            {
                path: 'tab1',
                loadChildren: () => import('./news-feed/news-feed.module').then(m => m.NewsFeedPageModule)
            },
            {
                path: 'tab2',
                loadChildren: () => import('./gewässer/tab2.module').then(m => m.GewässerPageModule)
            },
            {
                path: 'tab3',
                loadChildren: () => import('./chat/chat.module').then(m => m.ChatPageModule)
            },
            {
                path: 'tab4',
                loadChildren: () => import('./meins/meins.module').then(m => m.MeinsPageModule)
            },
            {
                path: 'camera', component: CameraModalPage
            },
            {
                path: '',
                redirectTo: '/tabs/tab1',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: 'tabs',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
    },

];

@NgModule({
    declarations: [CameraModalPage],
    imports: [RouterModule.forChild(routes), IonicModule],
    exports: [RouterModule]
})
export class TabsPageRoutingModule {
}
