import { ViewportScroller } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  activeSection = 'hero';
  isMenuOpen = false;

  constructor(private viewportScroller: ViewportScroller) {}

  // دالة السكرول مع تحديث القسم النشط
  scrollTo(section: string) {
    this.activeSection = section;
    this.isMenuOpen = false;
    this.viewportScroller.scrollToAnchor(section);
  }

  @HostListener('window:scroll')
  onScroll() {
    const sections = ['hero', 'work', 'clients', 'hire'];
    const scrollPosition = window.scrollY + 100;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          this.activeSection = section;
          break;
        }
      }
    }
  }
}
