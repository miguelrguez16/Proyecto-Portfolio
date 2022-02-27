import { Component, OnInit } from '@angular/core';
import { ContactoUsuario } from '../models/usuario';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
})
export class ContactoComponent implements OnInit {
  public _user: ContactoUsuario;
  public data_user:any;
  constructor() {
    this._user = new ContactoUsuario(
      '',
      '',
      '',
      ''
    );
  }

  ngOnInit(): void {}

  onSubmit(form:any) {
    this.data_user = form;
    //form.reset;
    console.log(this.data_user);

  }
}
