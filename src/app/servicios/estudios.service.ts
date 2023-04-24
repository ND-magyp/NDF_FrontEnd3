import { Injectable } from '@angular/core';
//Esto es para suscribirse y que se reciba respuesta de forma asincrónica
import { Observable } from 'rxjs';
//Esto es para poder hacer peticiones
import { HttpClient } from "@angular/common/http";
import { Estudios } from '../entidades/Estudios';

@Injectable({
  providedIn: 'root'
})
export class EstudiosService {
   url = 'http://localhost:8080/estudios';
  //  url = 'https://portfoliobackend-ndf.onrender.com/estudios';
    constructor(private httpClient:HttpClient) { }
  
    public listItems(): Observable<Estudios[]>{
      return this.httpClient.get<Estudios[]>(this.url);
    }
  
    public getById(id: number): Observable<any>{
      return this.httpClient.get<Estudios>(this.url + `/${id}`);
    }
  
    public saveItem(estudio: Estudios): Observable<any>{
      return this.httpClient.post<any>(this.url, estudio);
    }
  
    public updateItem(estudio: Estudios): Observable<any>{
      return this.httpClient.put<Estudios>(this.url, estudio);
    }
  
    public deleteItem(id: number): Observable<Estudios>{
      return this.httpClient.delete<any>(this.url + `/${id}`);
    }
 }
 
  
  // //Método observable que devuelve los datos se puede usar getDatos o getMenu
  // getEstudios():Observable<any>{
  //   //Se llama al JSON con su path o ruta, o bien, en su lugar se puede poner una URL para traer datos de un JSON online
  //   return this.http.get('../assets/json/estudios.json');
  // }

