import {Component} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {CameraModalPage} from './add-content-modal/camera-modal.page';
import {Router} from "@angular/router";

@Component({
    selector: 'app-tabs',
    templateUrl: 'tabs.page.html',
    styleUrls: ['tabs.page.scss']
})
export class TabsPage {

    constructor(public modalController: ModalController, public router: Router) {
    }

    onClickOpenModal() {
        this.presentModal();
    }


    async presentModal() {
        // const modal = await this.modalController.create({
        //     component: CameraModalPage,
        // });
        // return await modal.present();

        this.router.navigate(['tabs/camera']);
    }
}
