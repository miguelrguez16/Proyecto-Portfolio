import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // va a la etiqueta del html
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title:string = 'Angular Inicio';
  public mostrar_videojuegos:boolean = true;

  public setEnabled(valor:boolean):void{
    this.mostrar_videojuegos = valor;
  }
  

}


