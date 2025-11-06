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
      nombre: 'exclavo',
      puesto: 'exclavo1',
      foto: '../../../assets/fotocardabout.png',
      linkedin: 'https://ar.linkedin.com/',
      twitter: 'https://ar.linkedin.com/'
    },
    {
      nombre: 'exclavo',
      puesto: 'exclavo2',
      foto: '../../../assets/fotocardabout.png',
      linkedin: 'https://ar.linkedin.com/',
      twitter: 'https://ar.linkedin.com/'
    },
    {
      nombre: 'exclavo',
      puesto: 'exclavo3',
      foto: '../../../assets/fotocardabout.png',
      linkedin: 'https://ar.linkedin.com/',
      twitter: 'https://ar.linkedin.com/'
    }
  ];
}
