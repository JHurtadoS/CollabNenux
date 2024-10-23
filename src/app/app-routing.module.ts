import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'profile', loadChildren: () => import('./GeneralUser/general-user-routing.module').then(m => m.GeneralUserRoutingModule) },
  { path: 'profile/edit', loadChildren: () => import('./PrivateUser/PrivateUser.module').then(m => m.PrivateUserModule) },
  { path: 'login', loadChildren: () => import('./noUserPages/noUserPages.module').then(m => m.NoUserPagesModule) },
  { path: '', redirectTo: 'login', pathMatch: 'full' }  // Redirige a login por defecto si no hay rutas definidas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
