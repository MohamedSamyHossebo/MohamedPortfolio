import { Component, OnInit, Inject, PLATFORM_ID, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { EXPERIENCES, Experience } from '../../data/experience.data';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-experience-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './experience-detail.component.html',
  styleUrl: './experience-detail.component.css'
})
export class ExperienceDetailComponent implements OnInit, AfterViewInit, OnDestroy {
  experience: Experience | undefined;

  constructor(
    private route: ActivatedRoute,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.experience = EXPERIENCES.find(exp => exp.id === id);

    if (isPlatformBrowser(this.platformId)) {
      gsap.registerPlugin(ScrollTrigger);
    }
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId) && this.experience) {
      this.initAnimations();
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      ScrollTrigger.getAll().filter(st => st.vars.trigger === '.timeline-event').forEach(st => st.kill());
    }
  }

  private initAnimations(): void {
    gsap.fromTo('.detail-header',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );

    gsap.fromTo('.timeline-event',
      { opacity: 0, x: -30 },
      {
        scrollTrigger: {
          trigger: '.timeline-container',
          start: 'top 80%',
        },
        opacity: 1,
        x: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out'
      }
    );
  }

  getIconForType(type: string): string {
    switch (type) {
      case 'promotion': return 'trending_up';
      case 'achievement': return 'emoji_events';
      case 'skill': return 'psychology';
      case 'milestone': return 'flag';
      default: return 'circle';
    }
  }
}
