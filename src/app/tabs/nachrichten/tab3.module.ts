import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Nachrichten } from './nachrichten.component';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { NachrichtenPageRoutingModule } from './tab3-routing.module'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: Nachrichten }]),
    NachrichtenPageRoutingModule,
  ],
  declarations: [Nachrichten]
})
export class Tab3PageModule {}
