import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../material/materia.module';
import { PaginaRouterModule } from './router/pagina-router.module';

import { HomeComponent } from './pages/home/home.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { InicioSesionComponent } from './pages/inicio-sesion/inicio-sesion.component';
import { DetalleCompraComponent } from './pages/detalle-compra/detalle-compra.component';
import { DetalleProductoComponent } from './pages/detalle-producto/detalle-producto.component';
import { RegistroUsuarioComponent } from './pages/registro-usuario/registro-usuario.component';

import { SliderComponent } from './components/slider/slider.component';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';
import { ConfirmarComponent } from './components/confirmar/confirmar.component';
import { InformacionPrendaComponent } from './components/informacion-prenda/informacion-prenda.component';

import { ImagenPipe } from './pipes/imagen.pipe';


@NgModule({
  declarations: [
    CarritoComponent,
    HomeComponent,
    ProductoComponent,
    TarjetaComponent,
    ImagenPipe,
    DetalleProductoComponent,
    InicioSesionComponent,
    RegistroUsuarioComponent,
    AgregarComponent,
    ConfirmarComponent,
    DetalleCompraComponent,
    BuscarComponent,
    InformacionPrendaComponent,
    SliderComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    PaginaRouterModule
  ]
})
export class PaginaModule { }
