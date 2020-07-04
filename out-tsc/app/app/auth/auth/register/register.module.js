import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
const registerRoutes = [
    {
        path: '', component: RegisterComponent
    }
];
let RegisterModule = class RegisterModule {
};
RegisterModule = __decorate([
    NgModule({
        declarations: [RegisterComponent],
        imports: [
            RouterModule.forChild(registerRoutes),
            CommonModule,
            IonicModule
        ],
        exports: [
            RouterModule
        ]
    })
], RegisterModule);
export { RegisterModule };
//# sourceMappingURL=register.module.js.map