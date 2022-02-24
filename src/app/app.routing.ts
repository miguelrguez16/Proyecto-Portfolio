// Iportar modulos del router de angular
import { ModuleWithProviders } from "@angular/core";
import {Routes , RouterModule} from "@angular/router";

// importar componentes
import { ZapatillasComponent } from "./zapatillas/zapatillas.component";
import { VideojuegoComponent } from "./videojuego/videojuego.component";
import { CursosComponent } from "./cursos/cursos.component";
import { HomeComponent } from "./home/home.component";
// array de conf de las routas
const appRutas: Routes  =[
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'zapatillas', component: ZapatillasComponent},
    {path: 'videojuego', component: VideojuegoComponent},
    {path: 'cursos', component: CursosComponent},
    {path: '**', component: HomeComponent}
];


// exportar el modulo de las rutas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRutas);