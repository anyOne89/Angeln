import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {NewsCardContentComponent} from './news-card-content/news-card-content.component';
import {NewsFeedPage} from './news-feed/news-feed.page';
import {RouterModule, Routes} from '@angular/router';


const newsRoutes: Routes = [
    {
        path: '', component: NewsFeedPage,
    }
];


@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild(newsRoutes),
    ],
    declarations: [NewsFeedPage, NewsCardContentComponent]
})
export class NewsFeedPageModule {
}
