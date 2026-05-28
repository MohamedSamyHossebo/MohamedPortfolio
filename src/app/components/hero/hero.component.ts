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
    const bioElement = document.querySelector('.hero-bio');
    if (!bioElement) return;

    const bioText = 'Meet <span class="text-white font-bold">Mohamed</span>, an accomplished front-end developer renowned for his exemplary work in numerous projects. Proficient in utilizing <span class="text-white font-bold">Angular</span>, <span class="text-white font-bold">Bootstrap</span>, and <span class="text-white font-bold">TailwindCSS</span>, Mohamed consistently delivers outstanding user interfaces that seamlessly blend functionality and aesthetics. His meticulous attention to detail ensures a user-friendly and visually appealing experience. Mohamed\'s adept use of Angular results in modular and maintainable code, fostering effective collaboration with back-end developers. By integrating Bootstrap seamlessly, he expedites the development process and ensures a consistent, polished appearance across various devices. Mohamed\'s projects receive acclaim for their dynamic features, responsive designs, and overall user satisfaction. Committed to staying abreast of the latest front-end technologies, Mohamed\'s creative approach and technical expertise make him an invaluable contributor to the success of web solutions.';

    // Set initial states
    gsap.set(['.hero-title', '.hero-image', '.hero-bio', '.hero-cta', '.nav-dot'], { autoAlpha: 0 });
    
    // Clear element but keep it visible for typing
    bioElement.innerHTML = '';
    gsap.set('.hero-bio', { autoAlpha: 1 });

    const obj = { count: 0 };
    const totalChars = bioText.replace(/<[^>]*>/g, '').length;

    this.timeline = gsap.timeline({ 
      defaults: { ease: 'power3.out', duration: 1 },
      onComplete: () => {
        ScrollTrigger.refresh();
      }
    });
    
    this.timeline
      .to('.hero-title', { autoAlpha: 1, y: 0, delay: 0.2 })
      .to('.hero-image', { autoAlpha: 1, scale: 1, duration: 1.2 }, '-=0.6')
      .to(obj, {
        count: bioText.length,
        duration: 12,
        ease: 'none',
        onUpdate: () => {
          const currentText = bioText.substring(0, Math.round(obj.count));
          // Simple tag closer to prevent broken HTML during typing
          const closedText = this.closeTags(currentText);
          bioElement.innerHTML = closedText + '<span class="typing-cursor">|</span>';
        },
        onComplete: () => {
          bioElement.innerHTML = bioText; // Ensure full text at end
        }
      }, '-=0.8')
      .to('.hero-cta', { autoAlpha: 1, y: 0 }, '-=0.5')
      .to('.nav-dot', { autoAlpha: 1, x: 0, stagger: 0.1 }, '<');
  }

  private closeTags(str: string): string {
    const stack: string[] = [];
    const tags = str.match(/<[^>]*>/g) || [];
    
    for (const tag of tags) {
      if (tag.startsWith('</')) {
        stack.pop();
      } else if (!tag.endsWith('/>')) {
        const tagName = tag.match(/<([a-z1-6]+)/i)?.[1];
        if (tagName) stack.push(tagName);
      }
    }
    
    return str + stack.reverse().map(name => `</${name}>`).join('');
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
    const sections = ['hero', 'work', 'experience', 'clients', 'hire'];
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
