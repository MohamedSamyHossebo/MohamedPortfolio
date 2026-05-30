import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message?: string;
  errors?: string[];
}

@Injectable({ providedIn: 'root' })
export class ContactService {
  private http = inject(HttpClient);
  private readonly API_URL = 'https://node-mailer-service-lemon.vercel.app/api/contact';

  send(payload: ContactPayload): Observable<ContactResponse> {
    return this.http.post<ContactResponse>(this.API_URL, payload);
  }
}
