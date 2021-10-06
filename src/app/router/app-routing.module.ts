import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../pagina/pages/home/home.component';
import { CarritoComponent } from '../pagina/pages/carrito/carrito.component';
import { ProductoComponent } from '../pagina/pages/producto/producto.component';

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
