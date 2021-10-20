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
import { DetalleProductoComponent } from './pages/detalle-producto/detalle-producto.component';
import { InicioSesionComponent } from './pages/inicio-sesion/inicio-sesion.component';
import { RegistroUsuarioComponent } from './pages/registro-usuario/registro-usuario.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ConfirmarComponent } from './components/confirmar/confirmar.component';
import { DetalleCompraComponent } from './pages/detalle-compra/detalle-compra.component';




@NgModule({
  declarations: [
    CarritoComponent,
    HomeComponent,
    ProductoComponent,
    TarjetaComponent,
    ImagenPipe,
    CarritoProductoComponent,
    DetalleProductoComponent,
    InicioSesionComponent,
    RegistroUsuarioComponent,
    AgregarComponent,
    ConfirmarComponent,
    DetalleCompraComponent

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
