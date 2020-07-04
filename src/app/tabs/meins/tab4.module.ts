import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainsPage } from './mains-page.component';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab4PageRoutingModule } from './tab4-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: MainsPage }]),
    Tab4PageRoutingModule,
  ],
  declarations: [MainsPage]
})
export class MeinsPageModule {}
