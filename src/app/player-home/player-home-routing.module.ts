import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayerHomePage } from './player-home.page';

const routes: Routes = [
  {
    path: '',
    component: PlayerHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayerHomePageRoutingModule {}
