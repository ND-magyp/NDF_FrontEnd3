// esto es para hacer pedidos
import { HttpClient } from '@angular/common/http';
// esto es para suscribirse y que se reciba rta asincronica
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http: HttpClient) { }

  getDatos(): Observable<any> {
    return this.http.get('../assets/json/datos.json');

  }
}
