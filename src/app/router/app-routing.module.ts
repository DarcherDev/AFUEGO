import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../pagina/pages/home/home.component';
import { CarritoComponent } from '../pagina/pages/carrito/carrito.component';
import { ProductoComponent } from '../pagina/pages/producto/producto.component';
import { DetalleProductoComponent } from '../pagina/pages/detalle-producto/detalle-producto.component';
import { InicioSesionComponent } from '../pagina/pages/inicio-sesion/inicio-sesion.component';
import { RegistroUsuarioComponent } from '../pagina/pages/registro-usuario/registro-usuario.component';
import { AgregarComponent } from '../pagina/pages/agregar/agregar.component';
import { DetalleCompraComponent } from '../pagina/pages/detalle-compra/detalle-compra.component';

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
