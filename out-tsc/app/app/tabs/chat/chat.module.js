import { __decorate } from "tslib";
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ChatComponent } from './chat.component';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { ChatPageRoutingModule } from './chat-routing.module';
let ChatPageModule = class ChatPageModule {
};
ChatPageModule = __decorate([
    NgModule({
        imports: [
            IonicModule,
            RouterModule.forChild([{ path: '', component: ChatComponent }]),
            ChatPageRoutingModule,
            ExploreContainerComponentModule,
        ],
        declarations: [ChatComponent]
    })
], ChatPageModule);
export { ChatPageModule };
//# sourceMappingURL=chat.module.js.map