import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Component({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html',
})
export class ZapatillasComponent implements OnInit {
  public titulo: string;
  public zapas: Array<Zapatilla>;

  constructor() {
    this.titulo = 'Componente de Zapatillas';
    this.zapas = [
      new Zapatilla('Adidas Classic', 'Adidas', 110, 'green', true),
      new Zapatilla('Reebok Classic', 'Reebok', 60, 'azul', true),
      new Zapatilla('Nike Classic', 'Nike', 75, 'white', false),
      new Zapatilla('Fila Classic', 'Fila', 90, 'green', true),
    ];
    console.log('Cargado Zapatillas');
  }
  ngOnInit(): void {
    console.table(this.zapas);
  }
}
