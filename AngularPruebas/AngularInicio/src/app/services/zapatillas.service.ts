import { Injectable } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

// Inyectar la clase en otras

@Injectable()
export class ZapatillasService {
  
  public zapas: Array<Zapatilla>;

  constructor() {
    this.zapas = [
      new Zapatilla('Adidas Classic', 'Adidas', 110, 'Green', true),
      new Zapatilla('Reebok Classic', 'Reebok', 60, 'Blue', true),
      new Zapatilla('Nike Classic', 'Nike', 75, 'Yellow', false),
      new Zapatilla('Fila Classic', 'Fila', 90, 'Green', true),
      new Zapatilla('Fila Feel', 'Fila', 90, 'Orange', false),
      new Zapatilla('Quechua Feel', 'Quechua', 90, 'Grey', false),
    ];
  }

  getZapatillas(): Array<Zapatilla> {
    return this.zapas;
  }
}
