import {Component, Input, OnInit} from '@angular/core';
import {CardModel} from '../news-feed/model/card-model';

@Component({
    selector: 'app-news-card-content',
    templateUrl: './news-card-content.component.html',
    styleUrls: ['./news-card-content.component.scss'],
})
export class NewsCardContentComponent implements OnInit {

    @Input() card: CardModel;

    constructor() {
    }

    ngOnInit() {
    }

}
