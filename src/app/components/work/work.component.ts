import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css'
})
export class WorkComponent {
  projects = [
    { name: 'Artovia Freelance Project', url: 'https://artovia.netlify.app/', image: './assets/artovia.webp' },
    { name: 'Artovia Dashboard Freelance Project', url: '#', image: './assets/artovia-dashboard.webp' },
    { name: 'Market Client', url: 'https://mohamedsamyhossebo.github.io/Market-Client/', image: './assets/ECommerce.webp' },
    { name: 'Market Admin', url: 'https://mohamedsamyhossebo.github.io/Market-Admin/', image: './assets/market-dashboard.webp' },
    { name: 'GameOver', url: 'https://mohamedsamyhossebo.github.io/GameOver/home', image: './assets/GameOver.webp' },
    { name: 'Todo App', url: 'https://mohamedsamyhossebo.github.io/Todo-App/', image: './assets/todo.webp' },
    { name: 'Carousel', url: 'https://mohamedsamyhossebo.github.io/Carousel/', image: './assets/carousel.webp' },
    { name: 'Crud System', url: 'https://mohamedsamyhossebo.github.io/Crud-System/', image: './assets/Document.webp' },
    { name: 'Egyptian Party', url: 'https://mohamedsamyhossebo.github.io/Party/', image: './assets/Egyptian-Party.webp' },
    { name: 'QR Code Login', url: 'https://mohamedsamyhossebo.github.io/Qr-Code/', image: './assets/Login-QR-Code-Demo.webp' }
  ];
}
