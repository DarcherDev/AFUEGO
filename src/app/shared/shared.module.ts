import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { SiderbarComponent } from './siderbar/siderbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/materia.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FooterComponent,
    NavComponent,
    SiderbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    RouterModule
  ],
  exports:[
    FooterComponent,
    NavComponent,
    SiderbarComponent,
    
  ]
})
export class SharedModule { }
