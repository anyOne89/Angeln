import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsFeedPage } from './news-feed.page';
import {NewsCardContentComponent} from './card-content/news-card-content.component';

const routes: Routes = [
  {
    path: '',
    component: NewsFeedPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
