import { __decorate } from "tslib";
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewsFeedPage } from './news-feed.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { Tab1PageRoutingModule } from './news-feed-routing.module';
import { NewsCardContentComponent } from './news-card-content/news-card-content.component';
let Tab11PageModule = class Tab11PageModule {
};
Tab11PageModule = __decorate([
    NgModule({
        imports: [
            IonicModule,
            CommonModule,
            FormsModule,
            ExploreContainerComponentModule,
            Tab1PageRoutingModule
        ],
        declarations: [NewsFeedPage, NewsCardContentComponent]
    })
], Tab11PageModule);
export { Tab11PageModule };
//# sourceMappingURL=news-feed.module.js.map