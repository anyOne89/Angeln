import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainsPage } from './mains-page.component';
const routes = [
    {
        path: '',
        component: MainsPage,
    }
];
let Tab4PageRoutingModule = class Tab4PageRoutingModule {
};
Tab4PageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], Tab4PageRoutingModule);
export { Tab4PageRoutingModule };
//# sourceMappingURL=tab4-routing.module.js.map