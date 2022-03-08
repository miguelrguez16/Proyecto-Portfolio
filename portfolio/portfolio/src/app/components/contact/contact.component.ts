import { Component, OnInit } from '@angular/core';
import { AnyForUntypedForms } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public _widthSlider!: number;
  public _anchuraSlider!:number;
  public _captionsSlider:boolean;

  public _autor!:any;
  constructor() {this._captionsSlider = false; }

  ngOnInit() {  }

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

}
