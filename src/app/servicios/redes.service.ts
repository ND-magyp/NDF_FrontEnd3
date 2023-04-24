import { Injectable } from '@angular/core';
//Esto es para suscribirse y que se reciba respuesta de forma asincrónica
import { Observable } from 'rxjs';
//Esto es para poder hacer peticiones
import { HttpClient } from "@angular/common/http";
import { Redes } from '../entidades/Redes';

@Injectable({
  providedIn: 'root'
})
export class RedesService {
  //El constructor se hace private porque solo lo ve el autor y el primer http se llama alias
  url = 'http://localhost:8080/redes';
  // url = 'https://portfoliobackend-ndf.onrender.com/redes';
  constructor(private httpClient:HttpClient) { }

  public listItems(): Observable<Redes[]>{
    return this.httpClient.get<Redes[]>(this.url);
  }

  public getById(id: number): Observable<any>{
    return this.httpClient.get<Redes>(this.url + `/${id}`);
  }

  public saveItem(red: Redes): Observable<any>{
    return this.httpClient.post<any>(this.url, red);
  }

  public updateItem(red: Redes): Observable<any>{
    return this.httpClient.put<Redes>(this.url, red);
  }

  public deleteItem(id: number): Observable<Redes>{
    return this.httpClient.delete<any>(this.url + `/${id}`);
  }

}