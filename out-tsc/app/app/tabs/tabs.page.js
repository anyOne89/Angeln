import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
let TabsPage = class TabsPage {
    constructor(modalController, router) {
        this.modalController = modalController;
        this.router = router;
    }
    onClickOpenModal() {
        this.presentModal();
    }
    presentModal() {
        return __awaiter(this, void 0, void 0, function* () {
            // const modal = await this.modalController.create({
            //     component: CameraModalPage,
            // });
            // return await modal.present();
            this.router.navigate(['tabs/camera']);
        });
    }
};
TabsPage = __decorate([
    Component({
        selector: 'app-tabs',
        templateUrl: 'tabs.page.html',
        styleUrls: ['tabs.page.scss']
    })
], TabsPage);
export { TabsPage };
//# sourceMappingURL=tabs.page.js.map