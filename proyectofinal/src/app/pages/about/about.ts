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
      nombre: 'Tomás Jara',
      puesto: 'Tecnico en HTML',
      foto: '../../../assets/contacto.webp',
      linkedin: 'https://ar.linkedin.com/',
      twitter: 'https://ar.linkedin.com/'
    },
    {
      nombre: 'Tomás jara',
      puesto: 'Tecnico en CSS',
      foto: '../../../assets/contacto.webp',
      linkedin: 'https://ar.linkedin.com/',
      twitter: 'https://ar.linkedin.com/'
    },
    {
      nombre: 'Tomas jara',
      puesto: 'Tecnico en JavaScript y typescrip',
      foto:'../../../assets/contacto.webp',
      linkedin: 'https://ar.linkedin.com/',
      twitter: 'https://ar.linkedin.com/'
    }
  ];
}
