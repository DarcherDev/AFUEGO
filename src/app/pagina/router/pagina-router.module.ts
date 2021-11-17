import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../pages/home/home.component';
import { DetalleProductoComponent } from '../pages/detalle-producto/detalle-producto.component';
import { BuscarComponent } from '../pages/buscar/buscar.component';
import { RegistroUsuarioComponent } from '../pages/registro-usuario/registro-usuario.component';
import { CarritoComponent } from '../pages/carrito/carrito.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'carrito',
        component: CarritoComponent,
      },
      {
        path: 'buscar',
        component: BuscarComponent,
      },
      {
        path: 'registro',
        component: RegistroUsuarioComponent,
      },
      {
        path: ':id',
        component: DetalleProductoComponent,
      },
      {
        path: '**',
        redirectTo: 'home'
      },
    ]
  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PaginaRouterModule { }
