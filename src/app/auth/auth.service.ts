import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

interface Session {
  access_token: string;
  refresh_token: string;
  expires_at: number;
  userId: string;
}

export interface LoginResponse {
  message: string;
  session: Session;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject = new BehaviorSubject<Session | null>(null);

  constructor() {
    this.loadSession();
  }

  private loadSession(): void {
    const sessionData = localStorage.getItem('session');
    if (sessionData) {
      const session: Session = JSON.parse(sessionData);
      if (Date.now() < session.expires_at) {
        this.userSubject.next(session);
      } else {
        this.clearSession();
      }
    }
  }

  clearSession(): void {
    localStorage.removeItem('session');
    this.userSubject.next(null);
  }
  isOwner(profileId: string): boolean {
    const session = this.userSubject.value;
    return session ? session.userId === profileId : false;
  }

  login(session: Session): void {
    localStorage.setItem('session', JSON.stringify(session));
    this.userSubject.next(session);
  }

  logout(): void {
    this.clearSession();
  }

  getSession(): Observable<Session | null> {
    return this.userSubject.asObservable();
  }

  isTokenExpired(): boolean {
    const session = this.userSubject.value;
    return session ? Date.now() >= session.expires_at : true;
  }
}
