import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Project } from '../models/project.model';
import { Global } from './global';

@Injectable()
export class ProjectService {
    public url:string;
    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;
    }
    
    testService():string{
        return "probando servicio";
    }
    saveProject(newProject:Project):Observable<any>{
        let params = JSON.stringify(newProject);
        // como se va a enviar la info
        let headers = new HttpHeaders().set("Content-Type","application/json");
        console.log("guardando proyecto ", newProject._id);
       
        return this._http.post(this.url +"save-project", params,{headers:headers} );
    }
    
    getProjects():Observable<any>{
        let headers = new HttpHeaders()
        .set("Content-Type","application/json");
        console.log("obteniendo todos los proyectos ");
     
        return this._http.get(this.url + "projects", {headers: headers});
    }


    getProject(id:string):Observable<any>{
        let headers = new HttpHeaders().set("Content-Type","application/json");
        console.log("obteniendo proyecto ", id)
        return this._http.get(this.url + "project/" + id, {headers:headers})
    }

    deleteProject(id:string):Observable<any>{
        let headers = new HttpHeaders().set("Content-Type","application/json");
        console.log("eliminando proyecto ", id)
        return this._http.delete(this.url + "project/" + id, {headers:headers})
    }

    updateProject(newProject:Project):Observable<any>{
        let params = JSON.stringify(newProject);
        let headers = new HttpHeaders().set("Content-Type","application/json");
        console.log("actualizar proyecto ", newProject._id)
        return this._http.put(this.url + "project/" + newProject._id, params, {headers:headers})
    }

    
}
