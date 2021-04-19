import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login.service';

@Injectable({
  providedIn: 'root'
})
export class PreventLoggedInAccessGuard implements CanActivate {

  constructor(private loginService:LoginService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(!this.loginService.loggedIn()){
        console.log('if')
        return true
      }else {
        //this.router.navigate(['']);
        console.log('else')
        sessionStorage.clear();
        window.location.reload();
        return false
      }
     // return !this.loginService.loggedIn();
  }
  
}
