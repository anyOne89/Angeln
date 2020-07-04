import { __decorate } from "tslib";
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewsFeedPage } from './news-feed.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { NewsPageRoutingModule } from './news-feed-routing.module';
import { NewsCardContentComponent } from './news-card-content/news-card-content.component';
let NewsFeedPageModule = class NewsFeedPageModule {
};
NewsFeedPageModule = __decorate([
    NgModule({
        imports: [
            IonicModule,
            CommonModule,
            FormsModule,
            ExploreContainerComponentModule,
            NewsPageRoutingModule,
        ],
        declarations: [NewsFeedPage, NewsCardContentComponent]
    })
], NewsFeedPageModule);
export { NewsFeedPageModule };
//# sourceMappingURL=news-feed.module.js.map