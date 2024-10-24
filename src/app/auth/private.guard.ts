import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { catchError, map } from 'rxjs/operators';
import { ActivatedRouteSnapshot } from '@angular/router';
import { of } from 'rxjs';

export const privateGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const profileId = route.paramMap.get('id');

  return authService.getSession().pipe(
    map(session => {
      if (session && session.userId === profileId) {
        return true;
      } else {
        router.navigate(['/error']);  // Redirigir si no es el propietario
        return false;
      }
    }),
    catchError((error) => {
      console.error('Error en la validación del propietario:', error);
      router.navigate(['/error']);
      return of(false);
    })
  );

};
