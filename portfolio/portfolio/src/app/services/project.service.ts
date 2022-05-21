import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Project } from '../models/project.model';
import { Global } from './global';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
    public url:string;
    public _headersJson:HttpHeaders;
    constructor( private _http: HttpClient ){
        this.url = Global.url;
        this._headersJson = new HttpHeaders().set("Content-Type","application/json");
    }
    
    testService():string{
        return "probando servicio";
    }
    
    saveProject(newProject:Project):Observable<any>{
        let params = JSON.stringify(newProject);
        console.log("guardando proyecto ", newProject._id);
       
        return this._http.post(this.url +"save-project", params,{headers:this._headersJson} );
    }
    
    getProjects():Observable<any>{
        console.log("obteniendo todos los proyectos ");     
        return this._http.get(this.url + "projects", {headers:this._headersJson});
    }


    getProject(id:string):Observable<any>{
        console.log("obteniendo proyecto ", id)
        return this._http.get(this.url + "project/" + id, {headers:this._headersJson})
    }

    deleteProject(id:string):Observable<any>{
        console.log("eliminando proyecto ", id)
        return this._http.delete(this.url + "project/" + id, {headers:this._headersJson})
    }

    updateProject(newProject:Project):Observable<any>{
        let params = JSON.stringify(newProject);
        console.log("actualizar proyecto ", newProject._id)
        return this._http.put(this.url + "project/" + newProject._id, params, {headers:this._headersJson})
    }

    
}
