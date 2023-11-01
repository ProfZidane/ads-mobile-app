import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdUpdatePageRoutingModule } from './ad-update-routing.module';

import { AdUpdatePage } from './ad-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdUpdatePageRoutingModule
  ],
  declarations: [AdUpdatePage]
})
export class AdUpdatePageModule {}
