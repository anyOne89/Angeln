import { __decorate } from "tslib";
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MeinsPage } from './meins-page.component';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { AboutMeComponent } from './about-me/about-me.component';
const routes = [
    {
        path: '',
        component: MeinsPage,
    },
    {
        path: 'aboutMe',
        component: AboutMeComponent,
    }
];
let MeinsPageModule = class MeinsPageModule {
};
MeinsPageModule = __decorate([
    NgModule({
        imports: [
            IonicModule,
            CommonModule,
            FormsModule,
            ExploreContainerComponentModule,
            RouterModule.forChild(routes),
        ],
        declarations: [MeinsPage, AboutMeComponent]
    })
], MeinsPageModule);
export { MeinsPageModule };
//# sourceMappingURL=meins.module.js.map