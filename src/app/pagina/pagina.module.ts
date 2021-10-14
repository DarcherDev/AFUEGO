import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarritoComponent } from './pages/carrito/carrito.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { MaterialModule } from '../material/materia.module';
import { RouterModule } from '@angular/router';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';
import { ImagenPipe } from './pipes/imagen.pipe';
import { CarritoProductoComponent } from './components/carrito-producto/carrito-producto.component';



@NgModule({
  declarations: [
    CarritoComponent,
    HomeComponent,
    ProductoComponent,
    TarjetaComponent,
    ImagenPipe,
    CarritoProductoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ]
})
export class PaginaModule { }
