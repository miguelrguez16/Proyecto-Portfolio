import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $("header").css("background","#82916A");
    $("logo").on("click", function(e){
      //e.preventDefault();
      $("logo").css("color","#CB8655");
    });



  
  }

}
