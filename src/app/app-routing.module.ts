import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'player-detail/:id',
    loadChildren: () => import('./player-detail/player-detail.module').then( m => m.PlayerDetailPageModule)
  },
  {
    path: 'player-add',
    loadChildren: () => import('./player-add/player-add.module').then( m => m.PlayerAddPageModule)
  },
  {
    path: 'player-edit/:id',
    loadChildren: () => import('./player-edit/player-edit.module').then( m => m.PlayerEditPageModule)
  },
  {
    path: 'player-home',
    loadChildren: () => import('./player-home/player-home.module').then( m => m.PlayerHomePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
