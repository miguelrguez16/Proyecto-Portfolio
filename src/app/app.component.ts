import { Component } from '@angular/core';
import { configuracion } from './models/configuracion';
@Component({
  selector: 'app-root', // va a la etiqueta del html
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title:string = 'Angular';
  public descripcion:string ="";
  public fondo:string="";
  public color:string="";
  public mostrar_videojuegos:boolean = true;

  constructor(){
    this.title = configuracion.titulo;
    this.descripcion = configuracion.descripcion;
    this.color =configuracion.color;
    this.fondo=configuracion.fondo;
  }
  public setEnabled(valor:boolean):void{
    this.mostrar_videojuegos = valor;
  }
  

}


