import { isPlatformBrowser } from '@angular/common';
import { Component, inject, AfterViewInit, Inject, PLATFORM_ID, OnDestroy } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
    selector: 'app-hire',
    imports: [ReactiveFormsModule],
    templateUrl: './hire.component.html',
    styleUrl: './hire.component.css'
})
export class HireComponent implements AfterViewInit, OnDestroy {
  fb = inject(FormBuilder);
  hireForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required]
  });

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
    ScrollTrigger.getAll().filter(st => st.vars.trigger === '.hire-section').forEach(st => st.kill());
  }

  private initAnimations() {
    gsap.from('.hire-header', {
      scrollTrigger: {
        trigger: '.hire-section',
        start: 'top 80%',
      },
      opacity: 0,
      y: 30,
      duration: 1,
      ease: 'power3.out'
    });

    gsap.from('.hire-form', {
      scrollTrigger: {
        trigger: '.hire-content',
        start: 'top 85%',
      },
      opacity: 0,
      x: -50,
      duration: 1,
      ease: 'power3.out'
    });

    gsap.from('.hire-info', {
      scrollTrigger: {
        trigger: '.hire-content',
        start: 'top 85%',
      },
      opacity: 0,
      x: 50,
      duration: 1,
      ease: 'power3.out'
    });
  }

  sendMail() {
    if (this.hireForm.invalid) {
      this.hireForm.markAllAsTouched();
      return;
    }

    const { name, email, message } = this.hireForm.value as any;

    const subject = encodeURIComponent(`Hire Request from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=eng.mohamedsamyhossebo@gmail.com&su=${subject}&body=${body}`;

    if (isPlatformBrowser(this.platformId)) {
      window.open(gmailURL, '_blank');
    }
  }
}
