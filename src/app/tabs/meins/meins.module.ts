import {IonicModule} from '@ionic/angular';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {MeinsPage} from './meins-page.component';

import {AboutMeComponent} from './about-me/about-me.component';
import {FormsModule} from '@angular/forms';

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
    RouterModule.forChild(routes),
    FormsModule,
  ],
  declarations: [MeinsPage, AboutMeComponent]
})
export class MeinsPageModule {}
