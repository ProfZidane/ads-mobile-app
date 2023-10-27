import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdInsertPage } from './ad-insert.page';

const routes: Routes = [
  {
    path: '',
    component: AdInsertPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdInsertPageRoutingModule {}
