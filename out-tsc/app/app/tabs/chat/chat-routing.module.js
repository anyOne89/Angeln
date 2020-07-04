import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChatComponent } from './chat.component';
const routes = [
    {
        path: '',
        component: ChatComponent,
    }
];
let ChatPageRoutingModule = class ChatPageRoutingModule {
};
ChatPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], ChatPageRoutingModule);
export { ChatPageRoutingModule };
//# sourceMappingURL=chat-routing.module.js.map