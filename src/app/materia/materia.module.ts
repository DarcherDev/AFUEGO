import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';



@NgModule({
  exports:[
    MatButtonModule,
    MatSidenavModule,
    MatSliderModule
  ]
})
export class MateriaModule { }
