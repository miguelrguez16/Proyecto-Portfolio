import { Component, OnInit , ViewChild, AfterViewInit} from '@angular/core';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, AfterViewInit {
  public _widthSlider!: number;
  public _anchuraSlider!:number;
  public _captionsSlider:boolean;

  @ViewChild('textos', {static: true}) _texto: any;

  public _autor!:any;
  constructor() {this._captionsSlider = false; }
  

  ngOnInit() { 
    var opcionClasica = document.querySelector("#texto")?.innerHTML;
    console.log("3",this._texto);

  }

  cargarSlider(){
     this._anchuraSlider  = this._widthSlider;
  }

  resetearSlider(){
    this._anchuraSlider = -1;
  }

  conseguirAutor(event:any){
    console.log(event);
    this._autor = event;
  }

  cargar(){
    console.log("1",this._texto);

  }

  ngAfterViewInit(): void {
    console.log("2",this._texto);
  }

}
