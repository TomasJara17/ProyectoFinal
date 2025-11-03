import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contacto } from './pages/contacto/contacto'
import { Quejas } from './pages/quejas/quejas';
import { CarritoComponent } from './pages/carrito/carrito';
import { App } from './app';
export const routes: Routes = [
    {path:'home', component:Home},
    {path:'about', component:About},
    {path:'contacto', component:Contacto},
    {path:'quejas', component:Quejas},
    {path:'carrito', component:CarritoComponent}
];
