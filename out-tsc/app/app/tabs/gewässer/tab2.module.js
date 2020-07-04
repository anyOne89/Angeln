import { __decorate } from "tslib";
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { Tab2PageRoutingModule } from './tab2-routing.module';
let GewässerPageModule = class GewässerPageModule {
};
GewässerPageModule = __decorate([
    NgModule({
        imports: [
            IonicModule,
            CommonModule,
            FormsModule,
            ExploreContainerComponentModule,
            Tab2PageRoutingModule
        ],
        declarations: [Tab2Page]
    })
], GewässerPageModule);
export { GewässerPageModule };
//# sourceMappingURL=tab2.module.js.map