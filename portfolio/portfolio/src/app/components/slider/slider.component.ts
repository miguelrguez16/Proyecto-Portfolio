import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $("header").css("background","#82916A");
    $("logo").on("click", function(e:any){
      e.preventDefault();
      $("logo").css("color","#CB8655");
    });
      $('.slider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 600
      });
    
  }

}
