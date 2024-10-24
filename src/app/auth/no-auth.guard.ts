import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

export const noAuthGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.getSession().pipe(
    map(session => {
      console.log('Guard Session:', session);  // Depura la sesión aquí
      if (!session) {
        console.log('Access granted to login');  // Esto debería aparecer si no hay sesión
        return true;
      } else {
        console.log('Redirecting to dashboard');  // Esto aparece si hay sesión
        router.navigate(['/dashboard']);
        return false;
      }
    })
  );
};
