import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Tab4Page } from './tab4.page';
const routes = [
    {
        path: '',
        component: Tab4Page,
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