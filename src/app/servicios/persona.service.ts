// esto es para hacer pedidos
import { HttpClient } from '@angular/common/http';
import { Persona } from '../entidades/Persona';
// esto es para suscribirse y que se reciba rta asincronica
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  // url = 'http://localhost:8080/persona';
  url = 'https://portfolio-ap-5aku.onrender.com/persona';
  constructor(private httpClient:HttpClient) { }

  // public listItems(): Observable<Persona[]>{
  //   return this.httpClient.get<Persona[]>(this.url);
  // }
  //HC getDatos(): Observable<any> {
  //HC return this.http.get('../assets/json/datos.json');
  
  public getById(id: number): Observable<any>{
    return this.httpClient.get<Persona>(this.url + `/${id}`);
  }

  // public saveItem(persona: Persona): Observable<any>{
  //   return this.httpClient.post<any>(this.url, persona);
  // }

  public updateItem(persona: Persona): Observable<any>{
    return this.httpClient.put<Persona>(this.url, persona);
  }

  // public deleteItem(id: number): Observable<Persona>{
  //   return this.httpClient.delete<any>(this.url + `/${id}`);
  // }

}
