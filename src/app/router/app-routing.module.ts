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
    path:'compra',
    component:DetalleCompraComponent, 
  },
  {
    path:'producto',
    component: ProductoComponent,
  },
  {
    path:'detalle',
    component: DetalleProductoComponent,
  },
  {
    path:'login',
    component: InicioSesionComponent,
  },
  {
    path:'registro',
    component: RegistroUsuarioComponent,

  },
  {
    path:'agregar',
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
