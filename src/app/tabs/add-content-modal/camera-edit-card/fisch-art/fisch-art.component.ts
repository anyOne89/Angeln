import {Component, EventEmitter, OnInit} from '@angular/core';

@Component({
    selector: 'app-fisch-art',
    templateUrl: './fisch-art.component.html',
    styleUrls: ['./fisch-art.component.scss'],
})
export class FischArtComponent implements OnInit {

    filterData: any[] = [];
    itemsOriginal: any [] = [];
    searchTerm: string;

    constructor() {
    }

    ngOnInit() {
        this.itemsOriginal = [
            {title: 'Aal'},
            {title: 'Aland'},
            {title: 'Amberjack'},
            {title: 'Äsche'},
            {title: 'five'},
            {title: 'six'}
        ];

        this.filterData = this.itemsOriginal;
    }


    setFilteredItems() {
        this.filterData = this.itemsOriginal.filter(item => {
            return item.title.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
        });

    }
}
