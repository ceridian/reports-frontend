import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  CanActivate, 
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  CanLoad, Route
}                           from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad{

  constructor(private auth: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.auth.checkAuth(route);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.auth.checkAuth(route);
  }

  canLoad(route: Route): Observable<boolean> {
    return this.auth.checkAuth(route);
  }

}
