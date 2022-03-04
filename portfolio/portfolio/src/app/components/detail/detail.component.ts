import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { Global } from 'src/app/services/global';
import { ProjectService } from 'src/app/services/project.service';
import { Router, ActivatedRoute } from '@angular/router';
import { prepareEventListenerParameters } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ProjectService]
})
export class DetailComponent implements OnInit {
  public _project:Project;
  public _url:String;

  constructor(
    private _projectService: ProjectService,
    private _router: Router,
    private _route:ActivatedRoute
  ) { 
      this._url = Global.url;
      this._project = new Project("","","","",2022,"","");
  }

  ngOnInit(): void {
    console.log("inicializando busqueda");
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

  deleteProject2(id:string){
    this._projectService.deleteProject(id).subscribe({
      next: (response: Project) =>  console.log("OKEY"),
      error: (err: Error) =>console.error("Error: ", err)
    })
  }

  deleteProject(id:string){
    this._projectService.deleteProject(id).subscribe(
      response =>{
        this._router.navigate(['/proyectos']);
        
      },err=>{console.error(err)}
    );
  }
}
