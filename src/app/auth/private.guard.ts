import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { ActivatedRouteSnapshot } from '@angular/router';

export const privateGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const profileId = route.paramMap.get('id');

  return authService.getSession().pipe(
    map(session => {
      if (session && session.userId === profileId) {
        return true;
      } else {
        router.navigate(['/error']);
        return false;
      }
    })
  );
};
