import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactoUsuario } from '../models/usuario';

@Injectable()
export class PeticionesService {
    public url: String;
  constructor(public _http: HttpClient) {
      this.url = "https://reqres.in/";
  }

  // peticion ajax por http
  getUserById(_userId:number): Observable<any>{
      return this._http.get(this.url +'api/users/' + _userId);
  }

  addUser(user: any):Observable<any>{
      let dataJSon = JSON.stringify(user)
      let cabeceras = new HttpHeaders().set('Content-type', 'application/json)');
      return this._http.post(this.url + "api/users",dataJSon, {headers:cabeceras})
  }
}
