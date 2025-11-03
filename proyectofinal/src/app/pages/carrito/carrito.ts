import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Definimos la estructura de un producto (igual que en Home)
interface Producto {
  nombre: string;
  imagen: string;
  descripcion: string;
  stock: number;
  precio: number;
}

@Component({
  selector: 'app-carrito', // Nombre del componente
  standalone: true,
  imports: [CommonModule],  // Para usar *ngFor y *ngIf
  templateUrl: './carrito.html',
  styleUrls: ['./carrito.css']
})
export class CarritoComponent {
  // Carrito que vamos a mostrar, inicializado vacío
  carrito: { producto: Producto, cantidad: number }[] = [];

  constructor() {
    // Al iniciar, cargamos el carrito guardado en localStorage
    const guardado = localStorage.getItem('carrito');
    if (guardado) this.carrito = JSON.parse(guardado);
  }

  // Método para quitar un producto del carrito
  quitarDelCarrito(index: number) {
    this.carrito.splice(index, 1); // Eliminamos el producto del array
    // Actualizamos el localStorage para que Home también vea los cambios
    localStorage.setItem('carrito', JSON.stringify(this.carrito));
  }

  // Calcula el total del carrito
  totalCarrito(): number {
    return this.carrito.reduce((sum, item) => sum + item.producto.precio * item.cantidad, 0);
  }

  // Finalizar la compra
  comprar() {
    alert('¡Compra realizada!');
    this.carrito = [];                  // Limpiamos el carrito
    localStorage.removeItem('carrito'); // También borramos del localStorage
  }
}
