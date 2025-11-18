import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


// Importás la interfaz desde donde la definiste
import { Producto } from '../../models/producto';

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
    // getItem('carrito') busca en el localStorage la clave llamada "carrito".
    // Si existe, devuelve el valor guardado como STRING (por ejemplo: '[{...}]').
    // Si NO existe, devuelve null.
    // Por eso se guarda en una constante: para luego verificar si hay algo antes de usarlo.

    if (guardado) this.carrito = JSON.parse(guardado);
  }
  // Si guardado NO es null (o sea, sí había algo en localStorage),
// entonces convertimos el string que recuperamos a un objeto real usando JSON.parse.
// JSON.parse transforma el texto (ej: "[{...}]" ) nuevamente en un array de productos.
//Porque localStorage solo puede guardar texto, nada más.
// Luego asignamos ese array a this.carrito, cargando el carrito guardado al iniciar.
// LocalStorage es una memoria del navegador que permite guardar datos de forma permanente
// en pares clave-valor. No se borran al cerrar la página.

  // Método para quitar un producto del carrito
  quitarDelCarrito(index: number) {
    this.carrito.splice(index, 1); // Eliminamos el producto del array
    // Actualizamos el localStorage para que Home también vea los cambios
    localStorage.setItem('carrito', JSON.stringify(this.carrito));
  }

  // Calcula el total del carrito
totalCarrito(): number {
  return this.carrito.reduce((sum, item) => {
    // sum: acumulador de la suma
    // item: cada elemento del carrito { producto, cantidad }

    // Subtotal del producto = precio * cantidad
    const subtotal = item.producto.precio * item.cantidad;

    // Se suma el subtotal al total acumulado
    return sum + subtotal;
  }, 0); // 0 es el valor inicial; si el carrito está vacío devuelve 0
}
  //Finalizar la compra
  comprar() {
    alert('¡Compra realizada!'); 
    this.carrito = [];                   
    localStorage.removeItem('carrito'); 
  }
}
