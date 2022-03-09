import { Directive, ElementRef,OnInit } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective implements OnInit {

  constructor(
   public _elemt:ElementRef
  ) { 
    
  }
  ngOnInit(): void {
    var elemento = this._elemt.nativeElement;
   // elemento.style.background = "blue";
    elemento.innerText = elemento.innerText.toUpperCase();

  }

}
