import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-sichtbarkeit',
    templateUrl: './sichtbarkeit.component.html',
    styleUrls: ['./sichtbarkeit.component.scss'],
})
export class SichtbarkeitComponent implements OnInit {

    constructor() {
    }

    visibility: string;

    ngOnInit() {
    }

    visibilityHandler($event: any) {
        this.visibility = $event.tabIndex.value;
    }
}
