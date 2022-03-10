import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
})
export class CursosComponent implements OnInit {
  public _nombre: string;
  public _followers: number;

  // hooks de un component se lanzan en un momento de su ciclo
  constructor(private _route: ActivatedRoute, private _router: Router) {
    this._nombre = '';
    this._followers = -1;
  }

  // metodo que se carga nada mas crear

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      this._nombre = params['nombre']; //params.nombre
      //this._followers = parseInt(params['followers']); //params.followers
      this._followers = params['followers']; //* Convierte a entero
      console.log(this._nombre, this._followers);

      if (
        typeof this._followers === 'string' &&
        !Number.isNaN(Number(this._followers))
      ) {
        this._followers = Number(this._followers);
      } else {
        this._followers = -1;
      }
    });
  }


  redirigir(){
    this._router.navigate(['/zapatillas']);
  }
}
