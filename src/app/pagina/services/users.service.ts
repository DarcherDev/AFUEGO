import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private http: HttpClient;
  private url : string = environment.baseUrl;

  constructor( http: HttpClient) { 
    this.http = http;
  }
  
  getUsuarios(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}/users`);
  }

  // peticon get para obtener
  getUsuarioPorId(id: string): Observable<User> {
    return this.http.get<User>(`${this.url}/users/${id}`);
  }

  // peticon post para crear
  agregarUsuario(user: User): Observable<User> {
    return this.http.post<User>(`${this.url}/users`, user);
  }

  // peticon put para actualizar  
  editarUsuario(user: User): Observable<User> {
    return this.http.put<User>(`${this.url}/users/${user.id}`, user);
  }

  // peticon delete para eliminar   
  BorrarUsuario(id: string): Observable<any> {
    return this.http.delete<any>(`${this.url}/users/${id}`);
  }
}
