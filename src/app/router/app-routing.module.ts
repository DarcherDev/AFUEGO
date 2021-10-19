import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../pagina/pages/home/home.component';
import { CarritoComponent } from '../pagina/pages/carrito/carrito.component';
import { ProductoComponent } from '../pagina/pages/producto/producto.component';
import { DetalleProductoComponent } from '../pagina/pages/detalle-producto/detalle-producto.component';
import { AgregarComponent } from '../pagina/pages/agregar/agregar.component';

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent,
  },
  {
    path:'carrito',
    component: CarritoComponent,
  },
  {
    path:'producto',
    component: ProductoComponent,
  },
  {
    path:'detallep',
    component: DetalleProductoComponent,
  },
  {
    path:'editar',
    component: AgregarComponent,
  },
  {
    path:'editar/:id',
    component: AgregarComponent,
  },
  {
    path:'**',
    redirectTo:'home'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
