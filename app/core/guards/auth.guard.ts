import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {UserService} from "../../user/user.service";

@Injectable(
  // {  providedIn: 'root'}
  )
export class AuthGuard implements CanActivate {

  isLogged: boolean = false;


  constructor(private router: Router, private userService: UserService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const { authenticationRequired, authenticationFailureRedirect, isAdmin} = route.data;

    if (typeof isAdmin === 'boolean' && this.userService.isAdmin) {
      return true;
    }

    if (typeof authenticationRequired === 'boolean' && this.userService.isLogged == authenticationRequired) {
      return true;
    }
    return this.router.parseUrl(authenticationFailureRedirect) || '/';
  }

}
