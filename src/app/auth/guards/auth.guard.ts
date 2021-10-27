import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanLoad, CanActivate {

  private authService:AuthService;
  private router:Router;


  constructor( authService:AuthService, router:Router) {
    this.authService=authService;
    this.router=router;

   }
  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable <boolean> | Promise <boolean> | boolean {

    return this.authService.verificaAutenticacion()
    .pipe(
      tap( estaAutenticado => {
        if(!estaAutenticado){
          this.router.navigate(['./auth/login'])
        }
      })
    );
  }
  
  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise <boolean> | boolean{

    return this.authService.verificaAutenticacion()
    .pipe(
      tap( estaAutenticado => {
        if(!estaAutenticado){
          this.router.navigate(['./auth/login'])
        }
      })
    );
  }
}

