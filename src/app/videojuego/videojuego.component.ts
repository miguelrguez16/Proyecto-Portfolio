import { Component } from '@angular/core';

@Component({
    selector: "Videojuego",
    templateUrl: "./videojuego.component.html"
})

export class VideojuegoComponent {
    constructor(){
        this.titulo = "Componente de videojuegos";
        this.listado= "Listado juegos favs";

        console.log("Cargado");
    }
    public titulo:string;
    public listado:string;
}