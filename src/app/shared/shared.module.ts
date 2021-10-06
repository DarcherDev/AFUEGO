import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { SiderbarComponent } from './siderbar/siderbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MateriaModule } from '../materia/materia.module';



@NgModule({
  declarations: [
    FooterComponent,
    NavComponent,
    SiderbarComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MateriaModule
  ],
  exports:[
    FooterComponent,
    NavComponent,
    SiderbarComponent,
    
  ]
})
export class SharedModule { }
