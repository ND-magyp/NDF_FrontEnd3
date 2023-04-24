import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacionService } from './autentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private autenticacionService: AutenticacionService, private ruta: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let currentUser = this.autenticacionService.usuarioAutenticado;
    if (currentUser && currentUser.id) {
      // this.ruta.navigate(['dashboard']);
      return true;
    }
    else {
      this.ruta.navigate(['/']);
      return false;
    }
  }
}