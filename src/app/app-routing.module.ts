import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NoteDetailPage } from './pages/note-detail/note-detail.page';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  { 
    path: 'tabs', 
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule) 
  },
  {
    path: 'note-detail/:id', // Utilizamos un parámetro dinámico :id
    component: NoteDetailPage
  },
  {
    path: 'note-detail',
    loadChildren: () => import('./pages/note-detail/note-detail.module').then( m => m.NoteDetailPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
