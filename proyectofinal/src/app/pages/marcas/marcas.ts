import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from '../../models/producto'
@Component({
  selector: 'app-marcas',
  imports: [CommonModule],
  templateUrl: './marcas.html',
  styleUrl: './marcas.css',
})


export class Marcas {
  public infoMarca: Producto[]
  constructor() {
    this.infoMarca = [
      {
        id: 1,
        nombre: "nombre1",
        imagen: '../../',
        descripcion: "descripcion1",
        stock: 1,
        precio: 100,
        marca: 'Intel'
      },
    {
      id: 1,
      nombre: "nombre1",
      imagen: '../../',
      descripcion: "descripcion1",
      stock: 1,
      precio: 100,
      marca: 'Ryzen'
    }
    ]
  }
  marcaSeleccionado: any
  verMas(marca: any) {
    this.marcaSeleccionado = marca
  }
}
