import { Component, OnInit } from '@angular/core';
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
  constructor(
    private _peticionServicio: PeticionesService) {
    this._userId=2;
  }

  ngOnInit(): void {
    this.cargaUsuario();
    this.fecha = new Date();
  }

  cargaUsuario(){
    this._user =false;
    this._peticionServicio.getUserById(this._userId).subscribe(
      result => {this._user = result.data;},
      error => {console.error(error);}
    )
  }
}
