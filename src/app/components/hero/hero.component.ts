import { ViewportScroller } from '@angular/common';
import { Component, HostListener, AfterViewInit, Inject, OnDestroy } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
    selector: 'app-hero',
    imports: [],
    templateUrl: './hero.component.html',
    styleUrl: './hero.component.css'
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  activeSection = 'hero';
  private timeline: gsap.core.Timeline | undefined;

  constructor(private viewportScroller: ViewportScroller, @Inject(PLATFORM_ID) private platformId: Object) {
    this.viewportScroller.setOffset([0, 80]);
    if (isPlatformBrowser(this.platformId)) {
      gsap.registerPlugin(TextPlugin, ScrollTrigger);
    }
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const fragment = window.location.hash.replace('#', '');
      if (fragment) {
        this.scrollTo(fragment);
      }
      // Delay slightly to ensure DOM is fully ready
      setTimeout(() => this.initAnimations(), 100);
    }
  }

  ngOnDestroy() {
    if (this.timeline) {
      this.timeline.kill();
    }
  }

  private initAnimations() {
    // Set initial states
    gsap.set(['.hero-title', '.hero-image', '.hero-bio', '.hero-cta', '.nav-dot'], { autoAlpha: 0 });
    
    this.timeline = gsap.timeline({ 
      defaults: { ease: 'power3.out', duration: 1 },
      onComplete: () => {
        ScrollTrigger.refresh();
      }
    });
    
    this.timeline
      .to('.hero-title', { autoAlpha: 1, y: 0, delay: 0.2 })
      .to('.hero-image', { autoAlpha: 1, scale: 1, duration: 1.2 }, '-=0.6')
      .to('.hero-bio', { autoAlpha: 1, y: 0 }, '-=0.8')
      .to('.hero-cta', { autoAlpha: 1, y: 0 }, '-=0.5')
      .to('.nav-dot', { autoAlpha: 1, x: 0, stagger: 0.1 }, '<');
  }

  downloadCV(): void {
    if (isPlatformBrowser(this.platformId)) {
      const link = document.createElement('a');
      link.href = 'assets/pdf/Mohamed.pdf';
      link.download = 'Mohamed.pdf';
      link.click();
    }
  }

  scrollTo(section: string): void {
    this.activeSection = section;
    // Add smooth scroll behavior
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const sections = ['hero', 'tech-stack', 'work', 'experience', 'clients', 'hire'];
    let currentSection = 'hero';

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        // If the top of the section is above the middle of the viewport
        if (rect.top <= window.innerHeight / 2) {
          currentSection = section;
        }
      }
    }
    this.activeSection = currentSection;
  }
}
