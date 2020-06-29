import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NewsFeedPage} from './news-feed.page';
import {ExploreContainerComponentModule} from '../explore-container/explore-container.module';

import {Tab1PageRoutingModule} from './news-feed-routing.module';
import {NewsCardContentComponent} from './card-content/news-card-content.component';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ExploreContainerComponentModule,
        Tab1PageRoutingModule,
    ],
    declarations: [NewsFeedPage, NewsCardContentComponent]
})
export class NewsFeedPageModule {
}
