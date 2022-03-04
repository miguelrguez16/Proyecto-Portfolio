import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { Global } from 'src/app/services/global';
import { ProjectService } from 'src/app/services/project.service';
import { Router, ActivatedRoute } from '@angular/router';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ProjectService]
})
export class EditComponent implements OnInit {
  public _project:Project;
  public _url:String;
  public _status:String;
  public _savedProject:Project;
  public _filesToUpload: Array<File> = [];

  constructor(
    private _projectService: ProjectService,
    private _router: Router,
    private _route:ActivatedRoute
  ) { 
      this._url = Global.url;
      this._status = "initial";
      this._project = new Project("","","","",2022,"","");
      this._savedProject = new Project("","","","",2022,"","");
  }

  ngOnInit(): void {
    //cargamos el proyecto a editar
    this._route.params.subscribe(
      params => {
        let id = params["id"];
        this.getProject(id);
      }
    )
  }

  getProject(id:any){
    this._projectService.getProject(id).subscribe(
      response =>{
        this._project = response.project;
        console.log("Detalles proyecto ", id);
        console.log(response.project);
      },err=>{console.error(err)}
    );
  }

  actualizar(form:any){
    this._projectService.updateProject(this._project).subscribe({
     
    })
  }

  fileChangeEvent(fileInput:any){
    //console.log("ARCVHIVO");
    //console.log(fileInput);
    this._filesToUpload = <Array<File>> fileInput.target.files;

  }

}
