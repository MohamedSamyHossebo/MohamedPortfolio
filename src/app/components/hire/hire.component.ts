import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-hire',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './hire.component.html',
  styleUrl: './hire.component.css'
})
export class HireComponent {
  fb = inject(FormBuilder);
  hireForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required]
  });
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

    window.open(gmailURL, '_blank');
  }

}
