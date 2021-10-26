import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../auth/guards/auth.guard';

const routes: Routes = [
  {
    path:'auth',
    loadChildren: () => import('../auth/auth.module').then( m => m.AuthModule)
  },
  {
    path:'pagina',
    loadChildren: () => import('../pagina/pagina.module').then( m => m.PaginaModule)
  },
  {
    path:'admin',
    loadChildren: () => import('../admin/admin.module').then( m => m.AdminModule),
    canLoad: [ AuthGuard ],
    canActivate: [ AuthGuard ]
  },
  {
    path:'**',
    redirectTo:'pagina'
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
