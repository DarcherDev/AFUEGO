import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { AuthRouterModule } from './router/auth-router.module';
import { MaterialModule } from '../material/materia.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRouterModule,
    MaterialModule
  ]
})
export class AuthModule { }
