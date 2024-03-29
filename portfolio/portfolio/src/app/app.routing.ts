// Iportar modulos del router de angular
import { ModuleWithProviders } from "@angular/core";
import {Routes , RouterModule} from "@angular/router";

// importar componentes
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { DetailComponent } from "./components/detail/detail.component";
import { EditComponent } from "./components/edit/edit.component";
import { SliderComponent } from "./components/slider/slider.component";

// array de conf de las routas
const appRutas: Routes  =[
    {path: '', component: AboutComponent},
    {path: 'sobre-mi', component: AboutComponent},
    {path: 'proyectos', component: ProjectsComponent},
    {path: 'crear-proyecto', component: CreateComponent},
    {path: 'contacto', component: ContactComponent},
    {path: 'proyecto/:id', component: DetailComponent},
    {path: 'editar/:id', component:EditComponent},
    {path: 'slider', component:SliderComponent},
    {path: '**', component: ErrorComponent}
];


// exportar el modulo de las rutas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRutas);