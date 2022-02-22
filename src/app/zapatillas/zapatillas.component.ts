import { Component } from '@angular/core';

@Component({
    selector: "zapatillas",
    templateUrl: "./zapatillas.component.html"
})

export class ZapatillasComponent {
    constructor(){
        this.titulo = "Componente de Zapatillas";

        console.log("Cargado Zapatillas");
    }
    public titulo:string;
}