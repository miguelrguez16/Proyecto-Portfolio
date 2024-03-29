import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { Global } from 'src/app/services/global';
import { ProjectService } from 'src/app/services/project.service';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectService]
})
export class ProjectsComponent implements OnInit {
   public _projects:Project[]=[];
   public _url:String;


  constructor(
    private _projectService: ProjectService
  ) { 
      this._url = Global.url;
  }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(){
    this._projectService.getProjects().subscribe(
      response =>{
        this._projects = response.projects;
       // console.table(response.projects);
      },err=>{console.error(err)}
    );
  }

}
