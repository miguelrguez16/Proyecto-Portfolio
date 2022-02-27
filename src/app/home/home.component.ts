import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public _identificated: boolean;
  constructor() {
    this._identificated = false;
  }

  ngOnInit(): void {}

  setIdentificado() {
    this._identificated = true;
  }

  unSetIdentificado() {
    this._identificated = false;
  }
}
