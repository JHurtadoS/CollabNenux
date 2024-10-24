import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.getSession().pipe(
    map(session => {
      if (session) {
        return true;
      } else {
        router.navigate(['/login']);  // Si no hay sesión, redirigir a login
        return false;
      }
    }),
    catchError((error) => {
      console.error('Error obteniendo la sesión:', error);
      router.navigate(['/login']);
      return of(false);
    })
  );
};
