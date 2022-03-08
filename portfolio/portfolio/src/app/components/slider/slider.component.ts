import { Component, OnInit, Input ,Output,EventEmitter} from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
  @Input() _anchura!: number;
  @Input("_captions") _etiquetas!: boolean;
  @Output() emitirAutor = new EventEmitter;

  public autor:any;
  constructor() {

    this.autor={
      nombre:"Miguel",
      web:"todolibros",
      libro:"mistborn"
    }
  }

  ngOnInit(): void {
    $('header').css('background', '#82916A');
    $('logo').on('click', function (e: any) {
      e.preventDefault();
      $('logo').css('color', '#CB8655');
    });
    $('.slider').bxSlider({
      mode: 'fade',
      captions: this._etiquetas,
      slideWidth: this._anchura,
    });
  }


  lanzarEvento(event:any){
    console.log(event);
    this.emitirAutor.emit(this.autor);
  }
}
