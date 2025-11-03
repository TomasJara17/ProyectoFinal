import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


interface MiembroEquipo {
  nombre: string;
  puesto: string;
  foto: string;
  linkedin?: string;
  twitter?: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class AboutComponent {
  equipo: MiembroEquipo[] = [
    {
      nombre: 'Ana Pérez',
      puesto: 'CEO & Fundadora',
      foto: '../../../assets/equipo/ana.jpg',
      linkedin: '#',
      twitter: '#'
    },
    {
      nombre: 'Luis Gómez',
      puesto: 'Desarrollador Senior',
      foto: '../../../assets/equipo/luis.jpg',
      linkedin: '#',
      twitter: '#'
    },
    {
      nombre: 'María López',
      puesto: 'Marketing & Ventas',
      foto: '../../../assets/equipo/maria.jpg',
      linkedin: '#',
      twitter: '#'
    }
  ];
}
