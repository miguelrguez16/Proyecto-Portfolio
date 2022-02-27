import { Component, OnInit } from '@angular/core';
import { mergeWith } from 'rxjs';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService],
})
export class ExternoComponent implements OnInit {
  public _user: any;
  public _userId: any;
  public fecha: any;
  public nuevo_usuario:any;

  public new_user: any;
  constructor(
    private _peticionServicio: PeticionesService) {
    this._userId=2;
    this.new_user = {
      "name":"",
      "job":""
    };
  }

  ngOnInit(): void {
    this.cargaUsuario();
    this.fecha = new Date();
    
  }
  onSubmit(form:any){
    this._peticionServicio.addUser(this.new_user).subscribe(
      complete => {console.log(complete); this.nuevo_usuario= complete.id},
      error => {console.error(error);}
    )
    form.reset;
  }

  cargaUsuario(){
    this._user =false;
    this._peticionServicio.getUserById(this._userId).subscribe(
      result => {this._user = result.data;},
      error => {console.error(error);}
    )
  }
}
