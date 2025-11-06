import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-todos', // Nombre del componente
  standalone: true,     // Componente independiente (Angular Standalone)
  imports: [CommonModule], // Importamos CommonModule para directivas como *ngFor
  templateUrl: './todos.html', // Archivo HTML asociado
  styleUrls: ['./todos.css']   // Archivo CSS asociado
})
export class Todos {
  // Lista de productos disponibles en la tienda
  productos: Producto[] = [
    {
      nombre: 'RYZEN 9', imagen: '../../../assets/ryzen9.png', descripcion: 'Alto rendimiento', stock: 10, precio: 499,
      id: 0,
      marca: ''
    },
    {
      nombre: 'INTEL I9', imagen: '../../../assets/intel9.jpg', descripcion: 'Rendimiento extremo', stock: 8, precio: 599,
      id: 0,
      marca: ''
    },
    // ...otros productos
  ]
}