import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { noAuthGuard } from '../auth/no-auth.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [noAuthGuard],
    data: {
      debug: () => console.log('Login Route Reached EEEEEEEEEE')
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [noAuthGuard],
    data: {
      debug: () => console.log('Register Route Reached')
    }
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class NoUserRoutingModule {
  constructor() {
    console.log('NoUserRoutingModule Loaded');  // Depuración para verificar si el módulo de rutas está cargando
  }
}
