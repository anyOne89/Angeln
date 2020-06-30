import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsPage} from './tabs.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'tab1',
                loadChildren: () => import('./news-feed/news-feed.module').then(m => m.NewsFeedPageModule)
            },
            {
                path: 'tab2',
                loadChildren: () => import('./gewässer/tab2.module').then(m => m.Tab2PageModule)
            },
            {
                path: 'tab3',
                loadChildren: () => import('./nachrichten/tab3.module').then(m => m.Tab3PageModule)
            },
            {
                path: 'tab4',
                loadChildren: () => import('./meins/tab4.module').then(m => m.Tab4PageModule)
            },
            {
                path: '',
                redirectTo: '/tabs/tab1',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsPageRoutingModule {
}
