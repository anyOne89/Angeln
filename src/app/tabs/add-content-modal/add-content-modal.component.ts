import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {CameraModalPage} from './camera-modal/camera-modal.page';

@Component({
    selector: 'app-add-content-modal',
    templateUrl: './add-content-modal.component.html',
    styleUrls: ['./add-content-modal.component.scss'],
})
export class AddContentModalComponent implements OnInit, AfterViewInit {

    constructor(public modalController: ModalController) {


    }

    ngOnInit() {

    }


    async presentModal() {
        const modal = await this.modalController.create({

            component: CameraModalPage,
            cssClass: 'my-custom-class'
        });
        return await modal.present();
    }

    ngAfterViewInit(): void {
        // this.presentModal();
    }


    // After being dismissed, the data can e read in through the onWillDismiss or onDidDismiss attached to the modal after creation:
// const { data } = await modal.onWillDismiss();
// console.log(data);
}
