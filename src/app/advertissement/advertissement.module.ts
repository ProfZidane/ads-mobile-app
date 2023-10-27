import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvertissementPageRoutingModule } from './advertissement-routing.module';

import { AdvertissementPage } from './advertissement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdvertissementPageRoutingModule
  ],
  declarations: [AdvertissementPage]
})
export class AdvertissementPageModule {}
