import { trimTrailingNulls } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Component({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html',
})
export class ZapatillasComponent implements OnInit {
  public titulo: string;
  public zapas: Array<Zapatilla>;
  public marcas: Array<String>;
  public color: string;
  public mi_marca:string;

  constructor() {
    this.titulo = 'Componente de Zapatillas';
    this.zapas = [
      new Zapatilla('Adidas Classic', 'Adidas', 110, 'Green', true),
      new Zapatilla('Reebok Classic', 'Reebok', 60, 'Blue', true),
      new Zapatilla('Nike Classic', 'Nike', 75, 'Yellow', false),
      new Zapatilla('Fila Classic', 'Fila', 90, 'Green', true),
      new Zapatilla('Fila Feel', 'Fila', 90, 'Orange',false),
      new Zapatilla('Quechua Feel', 'Quechua', 90, 'Grey',false),
    ];
    this.marcas = new Array();
    this.color = "Green";
    this.mi_marca ="";

    console.log('Cargado Zapatillas');
  }
  ngOnInit(): void {
    console.table(this.zapas);
    console.log(this.color);
    this.getMarcas();
  }

  getMarcas() {
    this.zapas.forEach((zapa, index) => {
      if (!this.marcas.includes(zapa.marca)) this.marcas.push(zapa.marca);
    });
    console.log(this.marcas);
  }

  showMiMarca(){
      alert(this.mi_marca);
  }

  addMiMarca(){
    this.mi_marca =this.mi_marca.trim();
      if(!this.marcas.includes(this.mi_marca))
            this.marcas.push(this.mi_marca)
  }
  removeMarcaSelected(index:number){
      this.marcas.splice(index,1);
  }

}
