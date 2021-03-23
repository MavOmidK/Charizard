import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProspectEditPage } from './prospect-edit.page';

const routes: Routes = [
  {
    path: '',
    component: ProspectEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProspectEditPageRoutingModule {}
