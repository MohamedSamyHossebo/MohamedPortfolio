import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal, AfterViewInit, Inject, PLATFORM_ID, OnDestroy } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
    selector: 'app-hire',
    imports: [ReactiveFormsModule],
    templateUrl: './hire.component.html',
    styleUrl: './hire.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HireComponent implements AfterViewInit, OnDestroy {
  fb = inject(FormBuilder);
  contactService = inject(ContactService);

  isLoading = signal(false);
  successMessage = signal<string | null>(null);
  errorMessage = signal<string | null>(null);

  hireForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]]
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

    this.isLoading.set(true);
    this.successMessage.set(null);
    this.errorMessage.set(null);

    const { name, email, message } = this.hireForm.value as { name: string; email: string; message: string };

    this.contactService.send({ name, email, message }).subscribe({
      next: (res) => {
        this.isLoading.set(false);
        this.successMessage.set(res.message ?? 'Message sent successfully!');
        this.hireForm.reset();
      },
      error: (err) => {
        this.isLoading.set(false);
        const apiErrors: string[] = err?.error?.errors;
        this.errorMessage.set(
          apiErrors?.length ? apiErrors.join(' ') : 'Something went wrong. Please try again.'
        );
      }
    });
  }
}
