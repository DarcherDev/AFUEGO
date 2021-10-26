import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../material/materia.module';

import { AdminRouterModule } from '../admin/router/admin-router.module';

import { HomeComponent } from '../admin/pages/home/home.component';
import { AgregarComponent } from '../admin/pages/agregar/agregar.component';
import { ProductoComponent } from '../admin/pages/producto/producto.component';
import { TarjetaComponent } from '../admin/components/tarjeta/tarjeta.component';
import { ImagenPipe } from '../admin/pipes/imagen.pipe';
import { ConfirmarComponent } from '../admin/components/confirmar/confirmar.component';



@NgModule({
  declarations: [
    HomeComponent,
    AgregarComponent,
    ProductoComponent,
    TarjetaComponent,
    ImagenPipe,
    ConfirmarComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    AdminRouterModule
  ]
})
export class AdminModule { }
