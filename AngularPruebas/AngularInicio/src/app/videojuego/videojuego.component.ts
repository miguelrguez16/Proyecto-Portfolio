import { Component,OnInit,DoCheck,OnDestroy } from '@angular/core';

@Component({
    selector: "Videojuego",
    templateUrl: "./videojuego.component.html"
})

export class VideojuegoComponent implements OnInit,DoCheck,OnDestroy {
    constructor(){
        this.titulo = "Componente de videojuegos";
        this.listado= "Listado juegos favs";

       // console.log("Videojuego Contructor cargado");
    }
    public titulo:string;
    public listado:string;

    ngOnInit(): void {
        // Se ejecuta nada mas cargarse
       // console.log("Videojuego OnInit cargado");
    }

    // con cada cambio del componente este se 
    ngDoCheck(): void {
      //  console.log("Videojuego ngDoCheck cargado");
    }
    
    public cambiarTitulo():void{
        this.titulo = "HOLLAAAA";
    }

    ngOnDestroy(): void {
      //  console.log("OnDEstroy Ejecutado")
    }
}