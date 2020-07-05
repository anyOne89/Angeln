import { IonicModule } from '@ionic/angular';
import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MeinsPage } from './meins-page.component';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import {AboutMeComponent} from './about-me/about-me.component';

const routes: Routes = [
  {
    path: '',
    component: MeinsPage,
  },


  {
    path: 'aboutMe',
    component: AboutMeComponent,
  }


];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild(routes),
  ],
  declarations: [MeinsPage, AboutMeComponent]
})
export class MeinsPageModule {}
