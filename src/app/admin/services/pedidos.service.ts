import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Pedido } from '../interfaces/pedido.interface';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  private http: HttpClient;
  private url: string = environment.baseUrl;

  constructor(http: HttpClient) {
    this.http = http;
  }

  
  getPedido(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(`${this.url}/pedidos`);
  }
  
  // peticon get para obtener
  getPedidoPorId(id: string): Observable<Pedido> {
    return this.http.get<Pedido>(`${this.url}/pedidos/${id}`);
  }

  // peticon post para crear
  agregarPedido(pedido: Pedido): Observable<Pedido> {
    return this.http.post<Pedido>(`${this.url}/pedidos`, pedido);
  }

  // peticon put para actualizar  
  editarPedido(pedido: Pedido): Observable<Pedido> {
    return this.http.put<Pedido>(`${this.url}/pedidos/${pedido.id}`, pedido);
  }

  // peticon delete para eliminar   
  BorrarPedido(id: string): Observable<any> {
    return this.http.delete<any>(`${this.url}/pedidos/${id}`);
  }
}
