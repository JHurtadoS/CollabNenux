import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { calculateTimeDifference, convertUnixToDayjs } from '../utils/utiliesFunc';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.getSession().pipe(
    map(session => {
      console.log(session)

      if (session) {
        console.log("hello")
        // 1. Convertir el tiempo de expiración a un objeto dayjs usando utilidades
        const expiresAt = convertUnixToDayjs(session.session.expires_at);

        // 2. Calcular el tiempo restante usando la función utilitaria
        const timeLeft = calculateTimeDifference(expiresAt);
        console.log(expiresAt)
        console.log(timeLeft)
        // 3. Si queda tiempo en la sesión, iniciar la cuenta regresiva
        if (timeLeft > 0) {
          authService.triggerTokenCountdown(timeLeft);  // Inicia la cuenta regresiva
        } else {
          // Si el token ha expirado, limpiar la sesión y redirigir al login
          authService.clearSession();
          router.navigate(['/login']);
          console.log("test 2")
          return false;
        }

        return true;  // Permitir acceso si la sesión es válida
      } else {
        // Redirigir a login si no hay sesión activa
        console.log("test 1")
        router.navigate(['/login']);
        return false;
      }
    }),
    catchError((error) => {
      console.error('Error obteniendo la sesión:', error);
      router.navigate(['/login']);
      console.log("test 3")
      return of(false);
    })
  );
};
