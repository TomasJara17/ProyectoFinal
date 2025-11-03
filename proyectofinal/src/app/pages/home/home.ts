import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Definimos la estructura de un producto
interface Producto {
  nombre: string;
  imagen: string;
  descripcion: string;
  stock: number;
  precio: number;
}

@Component({
  selector: 'app-home', // Nombre del componente
  standalone: true,     // Componente independiente (Angular Standalone)
  imports: [CommonModule], // Importamos CommonModule para directivas como *ngFor
  templateUrl: './home.html', // Archivo HTML asociado
  styleUrls: ['./home.css']   // Archivo CSS asociado
})
export class Home {
  // Lista de productos disponibles en la tienda
  productos: Producto[] = [
    { nombre: 'RYZEN 9', imagen: '../../../assets/ryzen9.png', descripcion: 'Alto rendimiento', stock: 10, precio: 499 },
    { nombre: 'INTEL I9', imagen: '../../../assets/intel9.jpg', descripcion: 'Rendimiento extremo', stock: 8, precio: 599 },
    // ...otros productos
  ];

  // Carrito actual del usuario, inicializado vacío
  carrito: { producto: Producto, cantidad: number }[] = [];

  constructor() {
    // Al iniciar, verificamos si hay un carrito guardado en el navegador
    const guardado = localStorage.getItem('carrito');
    if (guardado) {
      // Si existe, lo convertimos de texto JSON a objeto
      this.carrito = JSON.parse(guardado);
    }
  }

  // Método para agregar un producto al carrito
  agregarAlCarrito(producto: Producto) {
    // Buscamos si el producto ya está en el carrito
    const item = this.carrito.find(p => p.producto.nombre === producto.nombre);

    if (item) {
      // Si ya está, incrementamos la cantidad solo si hay stock disponible
      if (item.cantidad < producto.stock) {
        item.cantidad++;
      } else {
        alert('No hay más stock disponible.');
      }
    } else {
      // Si no está, lo agregamos con cantidad 1
      this.carrito.push({ producto, cantidad: 1 });
    }

    // Guardamos el carrito actualizado en el navegador (localStorage)
    localStorage.setItem('carrito', JSON.stringify(this.carrito));
  }
}
