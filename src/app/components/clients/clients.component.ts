import { isPlatformBrowser } from '@angular/common';
import { Component, AfterViewInit, Inject, PLATFORM_ID, OnDestroy } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent implements AfterViewInit, OnDestroy {
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
    ScrollTrigger.getAll().filter(st => st.vars.trigger === '.clients-section').forEach(st => st.kill());
  }

  private initAnimations() {
    gsap.fromTo('.clients-header', 
      { opacity: 0, y: 30 },
      {
        scrollTrigger: {
          trigger: '.clients-section',
          start: 'top 90%',
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out'
      }
    );

    gsap.fromTo('.client-card', 
      { opacity: 0, scale: 0.95 },
      {
        scrollTrigger: {
          trigger: '.clients-list',
          start: 'top 90%',
        },
        opacity: 1,
        scale: 1,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out'
      }
    );
    
    setTimeout(() => ScrollTrigger.refresh(), 100);
  }
}
