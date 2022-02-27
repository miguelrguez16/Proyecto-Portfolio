import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';

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
}
