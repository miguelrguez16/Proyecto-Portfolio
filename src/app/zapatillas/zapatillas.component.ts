import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';
import { ZapatillasService } from '../services/zapatillas.service';
@Component({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html',
  providers:[ZapatillasService]
})
export class ZapatillasComponent implements OnInit {
  public titulo: string;
  public marcas: Array<String>;
  public color: string;
  public mi_marca:string;
  public zapas: Array<Zapatilla> = [];

  constructor(private _zapatillaService: ZapatillasService) {
    this.titulo = 'Componente de Zapatillas';
    
    this.marcas = new Array();
    this.color = "Green";
    this.mi_marca ="";
    console.log('Cargado Zapatillas');
  }
  ngOnInit(): void {
    this.zapas = this._zapatillaService.getZapatillas();

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


