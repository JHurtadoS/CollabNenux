import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
// import { noAuthGuard } from '../auth/no-auth.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    // canActivate: [noAuthGuard],
    // Agregamos este console.log para depurar
    data: {
      debug: () => console.log('Login Route Reached EEEEEEEEEE')  // Esto se verá en la consola si la ruta es alcanzada
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    // canActivate: [noAuthGuard],
    data: {
      debug: () => console.log('Register Route Reached')  // Depuración en la ruta de registro
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
