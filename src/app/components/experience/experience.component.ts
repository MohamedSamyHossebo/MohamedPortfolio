import { isPlatformBrowser } from '@angular/common';
import { Component, AfterViewInit, Inject, PLATFORM_ID, OnDestroy } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
    selector: 'app-experience',
    imports: [],
    templateUrl: './experience.component.html',
    styleUrl: './experience.component.css'
})
export class ExperienceComponent implements AfterViewInit, OnDestroy {
  experiencesDate = new Date();
  currentYear = this.experiencesDate.getFullYear();

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
    ScrollTrigger.getAll().filter(st => st.vars.trigger === '.experience-section').forEach(st => st.kill());
  }

  private initAnimations() {
    gsap.fromTo('.experience-header', 
      { opacity: 0, y: 30 },
      {
        scrollTrigger: {
          trigger: '.experience-section',
          start: 'top 90%',
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out'
      }
    );

    gsap.fromTo('.experience-item', 
      { opacity: 0, x: -50 },
      {
        scrollTrigger: {
          trigger: '.experience-timeline',
          start: 'top 90%',
        },
        opacity: 1,
        x: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out'
      }
    );
  }

  getDuration(startDateString: string): string {
    const startDate = new Date(startDateString);
    const endDate = new Date();
    
    let months = (endDate.getFullYear() - startDate.getFullYear()) * 12;
    months -= startDate.getMonth();
    months += endDate.getMonth();
    months += 1; // Include the starting month

    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    let durationParts = [];
    if (years > 0) {
      durationParts.push(years === 1 ? '1 yr' : `${years} yrs`);
    }
    if (remainingMonths > 0) {
      durationParts.push(remainingMonths === 1 ? '1 mo' : `${remainingMonths} mos`);
    }

    return durationParts.join(' ');
  }
}
