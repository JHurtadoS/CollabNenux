import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, Observable } from 'rxjs';
// import * as dayjs from 'dayjs';
import { map, takeWhile } from 'rxjs/operators';
import dayjs from '../utils/dayjs-helper';

export interface LoginResponse {
  message: string;
  user: User;
  session: Session;
}

export interface Session {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  token_type: string;
  expires_at: number;
}

export interface User {
  id: string;
  email: string;
  email_verified: boolean;
  role: string;
  created_at: Date;
  last_sign_in_at: Date;
}

export interface customSession {
  user: User;
  session: Session;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject = new BehaviorSubject<customSession | null>(null);
  private tokenExpiration$ = new BehaviorSubject<number | null>(null);

  constructor() {
    this.loadSession();
  }

  private loadSession(): void {
    const sessionData = localStorage.getItem('session');
    console.log(sessionData);

    if (sessionData) {
      const session: customSession = JSON.parse(sessionData);
      const expiresAt = dayjs.unix(session.session.expires_at);

      if (dayjs().isBefore(expiresAt)) {
        // Si el token aún no ha expirado, actualizar userSubject con la sesión
        this.userSubject.next(session);
      } else {
        // Si el token ha expirado, limpiar la sesión
        this.clearSession();
      }
    }
  }

  private startTokenExpirationCountdown(timeLeft: number): void {
    this.tokenExpiration$.next(timeLeft);

    interval(5000) // Cada 5 segundos
      .pipe(
        takeWhile(() => timeLeft > 0),
        map(() => timeLeft = Math.max(timeLeft - 5, 0))  // Asegura que no haya tiempo negativo

      )
      .subscribe({
        next: (timeRemaining) => {
          this.tokenExpiration$.next(timeRemaining);
          console.log(`Tiempo restante para que expire el token: ${timeRemaining} segundos`);
        },
        complete: () => {
          this.clearSession();
          alert('Tu sesión ha expirado.');
        }
      });
  }

  public triggerTokenCountdown(timeLeft: number): void {
    this.startTokenExpirationCountdown(timeLeft);
  }

  clearSession(): void {
    console.log('Clear session triggered');
    localStorage.removeItem('session');
    this.userSubject.next(null);
  }

  isOwner(profileId: string): boolean {
    const session = this.userSubject.value;
    return session?.user ? session.user.id === profileId : false;
  }

  login(session: customSession): void {
    localStorage.setItem('session', JSON.stringify(session));
    this.userSubject.next(session);
  }

  logout(): void {
    this.clearSession();
  }

  getSession(): Observable<customSession | null> {
    return this.userSubject.asObservable();
  }

  isTokenExpired(): boolean {
    const session = this.userSubject.value;
    return session ? Date.now() >= session.session.expires_at : true;
  }
}
