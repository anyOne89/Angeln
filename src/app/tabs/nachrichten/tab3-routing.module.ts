import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Nachrichten } from './nachrichten.component';

const routes: Routes = [
  {
    path: '',
    component: Nachrichten,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NachrichtenPageRoutingModule {}
