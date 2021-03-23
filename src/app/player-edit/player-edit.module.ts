import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayerEditPageRoutingModule } from './player-edit-routing.module';

import { PlayerEditPage } from './player-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayerEditPageRoutingModule
  ],
  declarations: [PlayerEditPage]
})
export class PlayerEditPageModule {}
