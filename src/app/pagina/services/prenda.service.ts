import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Prenda } from '../interfaces/prenda.interface';

@Injectable({
  providedIn: 'root'
})
export class PrendaService {

  private http: HttpClient;
  private url: string = environment.baseUrl;

  constructor(http: HttpClient) {
    this.http = http;
  }
  
  getPrenda(): Observable<Prenda[]> {
    return this.http.get<Prenda[]>(`${this.url}/prendas`);
  }

  // peticon get para obtener
  getPrendaPorId(id: string): Observable<Prenda> {
    return this.http.get<Prenda>(`${this.url}/prendas/${id}`);
  }

  // peticon post para crear
  agregarPrenda(prenda: Prenda): Observable<Prenda> {
    return this.http.post<Prenda>(`${this.url}/prendas`, prenda);
  }

  // peticon put para actualizar  
  editarPrenda(prenda: Prenda): Observable<Prenda> {
    return this.http.put<Prenda>(`${this.url}/prendas/${prenda.id}`, prenda);
  }

  // peticon delete para eliminar   
  BorrarPrenda(id: string): Observable<any> {
    return this.http.delete<any>(`${this.url}/prendas/${id}`);
  }

}
