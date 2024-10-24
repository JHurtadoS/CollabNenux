import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { authGuard } from '../auth/auth.guard';

const routes: Routes = [
  { path: 'profile/:id', component: ProfileViewComponent, canActivate: [authGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralUserRoutingModule { }
