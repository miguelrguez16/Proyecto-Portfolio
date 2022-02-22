import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';

@NgModule({//Decorador que confugura el modulo
  declarations: [ // carga las declaraciones
    //Aqui se cargan los componentes
    AppComponent,
    VideojuegoComponent
  ],
  imports: [ // carga los demas imports
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
