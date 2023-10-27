import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdInsertPageRoutingModule } from './ad-insert-routing.module';

import { AdInsertPage } from './ad-insert.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdInsertPageRoutingModule
  ],
  declarations: [AdInsertPage]
})
export class AdInsertPageModule {}
