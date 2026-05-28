import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, AfterViewInit, Inject, PLATFORM_ID, OnDestroy } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css'
})
export class WorkComponent implements AfterViewInit, OnDestroy {
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

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      gsap.registerPlugin(ScrollTrigger);
    }
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initAnimations();
    }
  }

  ngOnDestroy() {
    ScrollTrigger.getAll().filter(st => st.vars.trigger === '.work-section').forEach(st => st.kill());
  }

  private initAnimations() {
    gsap.fromTo('.work-header', 
      { opacity: 0, y: 30 },
      {
        scrollTrigger: {
          trigger: '.work-section',
          start: 'top 90%',
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out'
      }
    );

    gsap.fromTo('.project-card', 
      { opacity: 0, y: 50 },
      {
        scrollTrigger: {
          trigger: '.projects-grid',
          start: 'top 90%',
        },
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out'
      }
    );
    
    // Force a refresh to catch any layout changes
    setTimeout(() => ScrollTrigger.refresh(), 100);
  }
}
