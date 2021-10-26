import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Auth } from '../../interfaces/auth.interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent   {

  user: Auth = {
    id : '',
    user : '',
    rol : '',
    email : '',
    password : '',
  }
  
  hide=true;

  private router:Router;
  private authService:AuthService;

  constructor(router:Router, authService:AuthService) {
    this.router=router;
    this.authService=authService;
   }

  login(){
    this.authService.login().subscribe( resp => {
      if(resp.id){
        this.router.navigate(['./admin']);
      }
    })
  }

  logout(){
    this.router.navigate(['404']);
  }

}
