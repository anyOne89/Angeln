import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
let NewsFeedPage = class NewsFeedPage {
    constructor() {
    }
    loadData(event) {
        setTimeout(() => {
            console.log('Done');
            event.target.complete();
            // App logic to determine if all data is loaded
            // and disable the infinite scroll
            // if (data.length == 1000) {
            //     event.target.disabled = true;
            // }
        }, 500);
    }
    // toggleInfiniteScroll() {
    //   this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
    // }
    doRefresh(refresher) {
        // TODO: implement refresh function
        setTimeout(() => {
            console.log('Async operation has ended');
            refresher.target.complete();
        }, 2000);
    }
};
__decorate([
    ViewChild(IonInfiniteScroll)
], NewsFeedPage.prototype, "infiniteScroll", void 0);
NewsFeedPage = __decorate([
    Component({
        selector: 'app-tab1',
        templateUrl: 'news-feed.page.html',
        styleUrls: ['news-feed.page.scss']
    })
], NewsFeedPage);
export { NewsFeedPage };
//# sourceMappingURL=news-feed.page.js.map