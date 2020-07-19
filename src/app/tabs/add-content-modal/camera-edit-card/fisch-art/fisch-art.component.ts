import {Component, EventEmitter, OnInit} from '@angular/core';

@Component({
    selector: 'app-fisch-art',
    templateUrl: './fisch-art.component.html',
    styleUrls: ['./fisch-art.component.scss'],
})
export class FischArtComponent implements OnInit {

    public items: any = [];
    searchTerm: string;

    constructor() {
        this.items = [
            {title: 'one'},
            {title: 'two'},
            {title: 'three'},
            {title: 'four'},
            {title: 'five'},
            {title: 'six'}
        ];
    }

    ngOnInit() {
    }

    searchBarInput($event: EventEmitter<CustomEvent>) {
        // const query = event.target.value.toLowerCase();

        return this.items.filter(item => {
            return item.title.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
        });

    }

    setFilteredItems() {
        return this.items.filter(item => {
            return item.title.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
        });
    }
}
