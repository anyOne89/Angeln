import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewsFeedPage} from './news-feed.page';
import {NewsCardContentComponent} from './news-card-content/news-card-content.component';

const newsRoutes: Routes = [
    {
        path: '', component: NewsFeedPage,
    }
];

@NgModule({
    imports: [RouterModule.forChild(newsRoutes)],
    exports: [RouterModule]
})
export class NewsPageRoutingModule {
}
