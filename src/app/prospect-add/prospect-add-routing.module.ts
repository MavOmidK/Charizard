import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProspectAddPage } from './prospect-add.page';

const routes: Routes = [
  {
    path: '',
    component: ProspectAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProspectAddPageRoutingModule {}
