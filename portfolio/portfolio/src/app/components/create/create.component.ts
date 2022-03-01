import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { Project } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers:[ProjectService]
})
export class CreateComponent implements OnInit {
  public _title:string;
  public _project:Project;
  constructor(
    private _projectService:ProjectService
  ) { 
    this._title ="Crear nuevo proyecto:";
    this._project = new Project("","","","",2022,"","");
  }

  ngOnInit(): void {
  }

  onSubmit(form:any){ 
    console.log(this._project);
  }

}
