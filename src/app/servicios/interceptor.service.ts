import { Injectable } from '@angular/core';

import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AutenticacionService } from './autentication.service';


@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private autenticacionService: AutenticacionService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var currentUser = this.autenticacionService.usuarioAutenticado;
    if (currentUser && currentUser.id) {
      req.clone({
        setHeaders:{
          Authorization: `Bearer${currentUser.id}` //me devuelve los datos de la persona
        }
      })
    }
    console.log("Interceptor esta corriendo "+ JSON.stringify(currentUser));
    return next.handle(req);
  }
}
