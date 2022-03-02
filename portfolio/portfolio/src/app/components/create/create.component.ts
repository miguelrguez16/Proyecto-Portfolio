import { Component, OnInit } from '@angular/core';

import { Project } from 'src/app/models/project.model';
import { Global } from 'src/app/services/global';

import { ProjectService } from 'src/app/services/project.service';
import { UploadService } from 'src/app/services/upload.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers:[ProjectService, UploadService]
})
export class CreateComponent implements OnInit {
  public _title:string;
  public _project:Project;
  public _status:string="initial";
  public _filesToUpload: Array<File> = [];

  constructor(
    private _projectService:ProjectService,
    private _uploadService:UploadService
  ) { 
    this._title ="Crear nuevo proyecto:";
    this._project = new Project("","","","",2022,"","");
  }

  ngOnInit(): void {  }

  onSubmit(form:any){ 
    console.log(this._project);
    this._projectService.saveProyect(this._project).subscribe(
      (response) =>{ 
        this._uploadService.makeFileRequest(Global.url + "upload-image/" + response.project._id,[],this._filesToUpload,'image')
        .then((result:any)=> {
          this._status = "success";
          console.log(result);
          console.log("Respuesta backend: ",response);
          form.reset();
        });
        
      }, error =>{
        console.log("entra aqui 3");

        this._status = "error";
        console.error("Error en peticion: ", error);
      }
    )
    
  }
  otro(form:any){ 
    //console.log(this._project);
    this._projectService.saveProyect(this._project).subscribe(
      {
        next: (response: Project) =>  this._status = "success",
        error: (err: Error) => this._status = "error" ,
        complete: form.reset()
      }
    );
    
  }


  fileChangeEvent(fileInput:any){
    console.log("ARCVHIVO");
    console.log(fileInput);
    this._filesToUpload = <Array<File>> fileInput.target.files;

  }
 

}
