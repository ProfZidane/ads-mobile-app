import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdvertissementPage } from './advertissement.page';

const routes: Routes = [
  {
    path: '',
    component: AdvertissementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvertissementPageRoutingModule {}
