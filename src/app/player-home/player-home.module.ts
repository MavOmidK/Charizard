import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayerHomePageRoutingModule } from './player-home-routing.module';

import { PlayerHomePage } from './player-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayerHomePageRoutingModule
  ],
  declarations: [PlayerHomePage]
})
export class PlayerHomePageModule {}
