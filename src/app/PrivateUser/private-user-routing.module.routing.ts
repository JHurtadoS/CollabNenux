import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileViewEditComponent } from './profile-view-edit/profile-view-edit.component';
import { privateGuard } from '../auth/private.guard';

const routes: Routes = [
  { path: 'profile/edit/:id', component: ProfileViewEditComponent, canActivate: [privateGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateUserRoutingModule { }
