import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NewsFeedPage } from './news-feed.page';
const routes = [
    {
        path: '',
        component: NewsFeedPage,
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], Tab1PageRoutingModule);
export { Tab1PageRoutingModule };
//# sourceMappingURL=news-feed-routing.module.js.map