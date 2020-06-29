import { __decorate } from "tslib";
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab4Page } from './tab4.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { Tab4PageRoutingModule } from './tab4-routing.module';
let Tab4PageModule = class Tab4PageModule {
};
Tab4PageModule = __decorate([
    NgModule({
        imports: [
            IonicModule,
            CommonModule,
            FormsModule,
            ExploreContainerComponentModule,
            RouterModule.forChild([{ path: '', component: Tab4Page }]),
            Tab4PageRoutingModule,
        ],
        declarations: [Tab4Page]
    })
], Tab4PageModule);
export { Tab4PageModule };
//# sourceMappingURL=tab4.module.js.map