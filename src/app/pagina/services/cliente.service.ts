import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Cliente } from '../interfaces/cliente.interface';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private http: HttpClient;
  private url : string = environment.baseUrl;

  constructor( http: HttpClient) { 
    this.http = http;
  }

  getClientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`${this.url}/clientes`);    
  }

    // peticon get para obtener
    getClientePorId(id:string): Observable<Cliente>{    
      return this.http.get<Cliente>(`${this.url}/clientes/${ id }`);
    }
  
    // peticon post para crear
    agregarCliente(cliente: Cliente): Observable<Cliente>{
      return this.http.post<Cliente>(`${this.url}/clientes`, cliente);
    }
  
    // peticon put para actualizar  
    editarCliente(cliente: Cliente): Observable<Cliente>{
      return this.http.put<Cliente>(`${this.url}/clientes/${cliente.id}`, cliente);
    }
  
    // peticon delete para eliminar   
    BorrarCliente(id: string): Observable<any>{
      return this.http.delete<any>(`${this.url}/clientes/${id}`);
    }

}
