import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NewsFeedPage } from './news-feed.page';
const newsRoutes = [
    {
        path: '', component: NewsFeedPage,
    }
];
let NewsPageRoutingModule = class NewsPageRoutingModule {
};
NewsPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(newsRoutes)],
        exports: [RouterModule]
    })
], NewsPageRoutingModule);
export { NewsPageRoutingModule };
//# sourceMappingURL=news-feed-routing.module.js.map