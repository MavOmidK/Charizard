import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'prospect-home',
    pathMatch: 'full'
  },
  {
    path: 'prospect-home',
    loadChildren: () => import('./prospect-home/prospect-home.module').then( m => m.ProspectHomePageModule)
  },
  {
    path: 'prospect-add',
    loadChildren: () => import('./prospect-add/prospect-add.module').then( m => m.ProspectAddPageModule)
  },
  {
    path: 'prospect-details/:id',
    loadChildren: () => import('./prospect-details/prospect-details.module').then( m => m.ProspectDetailsPageModule)
  },
  {
    path: 'prospect-edit/:id',
    loadChildren: () => import('./prospect-edit/prospect-edit.module').then( m => m.ProspectEditPageModule)
  },
  {
    path: 'prospect-add',
    loadChildren: () => import('./prospect-add/prospect-add.module').then( m => m.ProspectAddPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
