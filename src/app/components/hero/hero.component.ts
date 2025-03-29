import { ViewportScroller } from '@angular/common';
import { Component, HostListener, AfterViewInit, Inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements AfterViewInit {
  activeSection = 'hero';

  constructor(private viewportScroller: ViewportScroller, @Inject(PLATFORM_ID) private platformId: Object) {
    this.viewportScroller.setOffset([0, 80]);
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const fragment = window.location.hash.replace('#', '');
      if (fragment) {
        this.scrollTo(fragment);
      }
    }
  }
  downloadCV(): void {
    if (isPlatformBrowser(this.platformId)) {
      const link = document.createElement('a');
      link.href = 'assets/pdf/Mohamed-Samy-CV.pdf';
      link.download = 'Mohamed-Samy-CV.pdf';
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
    const sections = ['hero', 'work', 'clients', 'hire'];
    const currentPosition = window.scrollY + 100;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        if (currentPosition >= offsetTop && currentPosition < offsetTop + offsetHeight) {
          this.activeSection = section;
          break;
        }
      }
    }
  }
}
