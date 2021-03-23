import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProspectAddPageRoutingModule } from './prospect-add-routing.module';

import { ProspectAddPage } from './prospect-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProspectAddPageRoutingModule
  ],
  declarations: [ProspectAddPage]
})
export class ProspectAddPageModule {}
