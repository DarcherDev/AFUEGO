import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarritoComponent } from '../pages/carrito/carrito.component';
import { HomeComponent } from '../pages/home/home.component';
import { ProductoComponent } from '../pages/producto/producto.component';
import { DetalleProductoComponent } from '../pages/detalle-producto/detalle-producto.component';
import { BuscarComponent } from '../pages/buscar/buscar.component';
import { RegistroUsuarioComponent } from '../pages/registro-usuario/registro-usuario.component';
import { AgregarComponent } from '../../admin/pages/agregar/agregar.component';

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
        path: 'producto',
        component: ProductoComponent,
      },
      {
        path: 'detalle',
        component: DetalleProductoComponent,
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
        path: '**',
        redirectTo: 'home'
      }
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
