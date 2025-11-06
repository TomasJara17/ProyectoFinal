// Definimos la estructura de un producto
export interface Producto {
  id: number;
  nombre: string;
  marca:string;
  imagen: string;
  descripcion: string;
  stock: number;
  precio: number;
}