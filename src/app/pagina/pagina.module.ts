import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarritoComponent } from './pages/carrito/carrito.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { MateriaModule } from '../materia/materia.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CarritoComponent,
    HomeComponent,
    ProductoComponent
  ],
  imports: [
    CommonModule,
    MateriaModule,
    RouterModule
  ]
})
export class PaginaModule { }
