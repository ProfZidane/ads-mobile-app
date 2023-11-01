import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdOwnerPage } from './ad-owner.page';

const routes: Routes = [
  {
    path: '',
    component: AdOwnerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdOwnerPageRoutingModule {}
