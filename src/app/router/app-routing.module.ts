import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AuthGuard } from '../auth/guards/auth.guard';

import { HomeComponent } from '../pagina/pages/home/home.component';
import { InicioSesionComponent } from '../pagina/pages/inicio-sesion/inicio-sesion.component';


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
