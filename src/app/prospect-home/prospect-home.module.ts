import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProspectHomePageRoutingModule } from './prospect-home-routing.module';

import { ProspectHomePage } from './prospect-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProspectHomePageRoutingModule
  ],
  declarations: [ProspectHomePage]
})
export class ProspectHomePageModule {}
