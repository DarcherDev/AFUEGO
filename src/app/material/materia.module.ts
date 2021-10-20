import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule } from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {FormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {TextFieldModule} from '@angular/cdk/text-field';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatOptionModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSnackBarModule} from '@angular/material/snack-bar'; 
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';

import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog'; 




@NgModule({
  exports:[
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    TextFieldModule,
    MatProgressSpinnerModule,
    MatOptionModule,
    MatSelectModule,
    MatSidenavModule,
    MatTabsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatDialogModule,
    FormsModule,
  ]
})
export class MaterialModule { }
