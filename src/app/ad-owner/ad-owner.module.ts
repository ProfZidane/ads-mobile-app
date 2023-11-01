import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdOwnerPageRoutingModule } from './ad-owner-routing.module';

import { AdOwnerPage } from './ad-owner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdOwnerPageRoutingModule
  ],
  declarations: [AdOwnerPage]
})
export class AdOwnerPageModule {}
