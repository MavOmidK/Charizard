import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProspectEditPageRoutingModule } from './prospect-edit-routing.module';

import { ProspectEditPage } from './prospect-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProspectEditPageRoutingModule
  ],
  declarations: [ProspectEditPage]
})
export class ProspectEditPageModule {}
