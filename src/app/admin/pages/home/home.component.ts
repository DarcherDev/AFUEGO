import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  private router:Router;
  private authService:AuthService;

  constructor(router:Router, authService:AuthService) {
    this.router=router;
    this.authService=authService;
   }

  ngOnInit(): void {
  }

  logout(){
    this.router.navigate(['./auth'])
  }
  get auth(){
    return this.authService.auth;
  }
}
