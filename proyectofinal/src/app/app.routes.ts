import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { AboutComponent } from './pages/about/about';
import { Contacto } from './pages/contacto/contacto'
import { Quejas } from './pages/quejas/quejas';
import { CarritoComponent } from './pages/carrito/carrito';
import { Todos } from './pages/todos/todos';
import { Galeria } from './pages/galeria/galeria';
import { Marcas } from './pages/marcas/marcas';
import { App } from './app';
export const routes: Routes = [
    {path: '', component:Home},
    {path:'home', component:Home},
    {path:'about', component:AboutComponent},
    {path:'contacto', component:Contacto},
    {path:'quejas', component:Quejas},
    {path:'carrito', component:CarritoComponent},
    {path:'todos', component:Todos},
    {path:'galeria', component:Galeria},
    {path:'marcas', component:Marcas}
];
