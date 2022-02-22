import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {


  // hooks de un component se lanzan en un momento de su ciclo
  constructor() { }
  // metodo que se carga nada mas crear
  
  ngOnInit(): void {
  }

}