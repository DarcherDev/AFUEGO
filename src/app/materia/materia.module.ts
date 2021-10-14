import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  exports:[
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatTabsModule,
    MatToolbarModule
  ]
})
export class MateriaModule { }
