import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { AboutComponent } from './pages/about/about';
import { Contacto } from './pages/contacto/contacto'
import { CarritoComponent } from './pages/carrito/carrito';
import { Todos } from './pages/todos/todos';
import { Galeria } from './pages/galeria/galeria';
import { Alianzas } from './pages/alianzas/alianzas';
import { AyudaComponent } from './pages/ayuda/ayuda.component';
import { TerminosLegalesComponent } from './pages/terminos-legales/terminos-legales.component';
import { MarcasComponent } from './pages/marcas/marcas.component';
import { OfertasComponent } from './pages/ofertas/ofertas.component';
export const routes: Routes = [
    {path: '', component:Home},
    {path:'home', component:Home},
    {path:'about', component:AboutComponent},
    {path:'contacto', component:Contacto},
    {path:'carrito', component:CarritoComponent},
    {path:'todos', component:Todos},
    {path:'galeria', component:Galeria},
    {path:'contacto', component:Contacto},
    {path:'alianzas', component:Alianzas},
    {path: 'ayuda', component: AyudaComponent},
    {path: 'terminos-legales', component: TerminosLegalesComponent },
    {path: 'marcas', component:MarcasComponent},
    {path: 'ofertas', component:OfertasComponent},
];
