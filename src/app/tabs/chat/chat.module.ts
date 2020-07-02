import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatComponent } from './chat.component';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ChatPageRoutingModule } from './chat-routing.module';

@NgModule({
  imports: [
    IonicModule,
    RouterModule.forChild([{path: '', component: ChatComponent}]),
    ChatPageRoutingModule,
    ExploreContainerComponentModule,
  ],
  declarations: [ChatComponent]
})
export class ChatPageModule {}
