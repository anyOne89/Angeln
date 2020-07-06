import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsPage} from './tabs.page';

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
                path: 'tab5',
                loadChildren: () => import('./add-content-modal/add-content.module').then(m => m.AddContentModule)
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
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsPageRoutingModule {
}
