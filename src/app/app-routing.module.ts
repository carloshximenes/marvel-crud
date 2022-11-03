import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'characters',
    loadChildren: () => import('./components/characters-list/characters-list.module').then(m => m.CharactersListModule)
  },
  {
    path: 'characters/:id',
    loadChildren: () => import('./components/characters-details/characters-details.module').then(m => m.CharactersDetailsModule)
  },
  {path: '', redirectTo: '/characters', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
