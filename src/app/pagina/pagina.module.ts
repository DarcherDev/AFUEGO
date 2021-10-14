import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';


import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/materia.module';

import { CarritoComponent } from './pages/carrito/carrito.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductoComponent } from './pages/producto/producto.component';
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
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    RouterModule
  ]
})
export class PaginaModule { }
