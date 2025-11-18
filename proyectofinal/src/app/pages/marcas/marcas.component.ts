import { Component } from '@angular/core';
import { Producto } from '../../models/producto';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-marcas',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './marcas.component.html',
  styleUrl: './marcas.component.css'
})
export class MarcasComponent {
 // Lista de productos disponibles en la tienda
  productos: Producto[] = [
       {
         nombre: 'RYZEN 9', imagen: '../../../assets/ryzen9.png', descripcion: 'Alto rendimiento', stock: 10, precio: 499,
         id: 0,
         marca: 'AMD'
       },
    {
      nombre: 'INTEL I9', imagen: '../../../assets/intel9.jpg', descripcion: 'Rendimiento extremo', stock: 8, precio: 599,
      id: 0,
      marca: 'INTEL'
    },
    {
      nombre: 'INTEL I5', imagen: '../../../assets/i5.webp', descripcion: 'Rendimiento medio', stock: 8, precio: 399,
      id: 0,
      marca: 'INTEL'
    },
    {
      nombre: 'RYZEN 3', imagen: '../../../assets/ryzen3.avif', descripcion: 'Rendimiento bajo', stock: 10, precio: 99,
      id: 0,
      marca: 'AMD'
    },
    {
      nombre: 'RYZEN 5', imagen: '../../../assets/ryzen5.jpg', descripcion: 'Rendimiento medio', stock: 14, precio: 250,
      id: 0,
      marca: 'AMD'
    },
    {
      nombre: 'INTEL PENTIUM GOLD', imagen: '../../../assets/ip.jpg', descripcion: 'Rendimiento bajo', stock: 4, precio: 99,
      id: 0,
      marca: 'INTEL'
    },
    {
      nombre: 'RYZEN 7', imagen: '../../../assets/r7.webp', descripcion: 'Rendimiento bajo', stock: 4, precio: 99,
      id: 0,
      marca: 'AMD'
    },
    {
      nombre: 'INTEL XEON E3-1240 V2', imagen: '../../../assets/ix.webp', descripcion: 'Rendimiento medio', stock: 4, precio: 140,
      id: 0,
      marca: 'INTEL'
    },
  ]
   // Variable para mostrar los productos filtrados
  productosFiltrados: Producto[] = [...this.productos];

  // Método para filtrar por marca
  filtrarMarca(marca: string) {
    if (marca) {
      this.productosFiltrados = this.productos.filter(p => p.marca === marca);
    } else {
      this.productosFiltrados = [...this.productos]; // mostrar todos
    }
  }
}


