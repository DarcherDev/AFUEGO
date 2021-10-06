import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  exports:[
    MatButtonModule,
    MatTabsModule
  ]
})
export class MateriaModule { }
