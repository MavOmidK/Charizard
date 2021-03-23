import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProspectHomePage } from './prospect-home.page';

const routes: Routes = [
  {
    path: '',
    component: ProspectHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProspectHomePageRoutingModule {}
