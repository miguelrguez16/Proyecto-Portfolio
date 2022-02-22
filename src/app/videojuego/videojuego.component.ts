import { Component } from '@angular/core';

@Component({
    selector: "Videojuego",
    template: `
    <h2>Componente de videojuego</h2>
    <ul>
        <li>GTA</li>
        <li>DAXTER</li>
        <li>MARIO</li>
        <li>Pokempon</li>
    </ul>
    `
})
export class VideojuegoComponent {
    constructor(){
        console.log("Cargado");
    }
}