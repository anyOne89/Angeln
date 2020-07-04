import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainsPage } from './mains-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab4PageRoutingModule {}
