import { __decorate } from "tslib";
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewsCardContentComponent } from './news-card-content/news-card-content.component';
import { NewsFeedPage } from './news-feed/news-feed.page';
import { RouterModule } from '@angular/router';
const newsRoutes = [
    {
        path: '', component: NewsFeedPage,
    }
];
let NewsFeedPageModule = class NewsFeedPageModule {
};
NewsFeedPageModule = __decorate([
    NgModule({
        imports: [
            IonicModule,
            CommonModule,
            FormsModule,
            RouterModule.forChild(newsRoutes),
        ],
        declarations: [NewsFeedPage, NewsCardContentComponent]
    })
], NewsFeedPageModule);
export { NewsFeedPageModule };
//# sourceMappingURL=news-feed.module.js.map