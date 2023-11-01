import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdUpdatePage } from './ad-update.page';

const routes: Routes = [
  {
    path: '',
    component: AdUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdUpdatePageRoutingModule {}
