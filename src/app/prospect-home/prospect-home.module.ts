import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProspectHomePageRoutingModule } from './prospect-home-routing.module';
import { ProspectHomePage } from './prospect-home.page';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragDrop, DragDropModule } from '@angular/cdk/drag-drop';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProspectHomePageRoutingModule,
    ScrollingModule,
    DragDropModule,
    RouterModule.forChild([{ path: '', component: ProspectHomePage }])
  ],
  declarations: [ProspectHomePage]
})
export class ProspectHomePageModule {}
