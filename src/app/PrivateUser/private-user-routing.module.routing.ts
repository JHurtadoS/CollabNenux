import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileViewEditComponent } from './profile-view-edit/profile-view-edit.component';

const routes: Routes = [
  { path: 'profile/edit/:id', component: ProfileViewEditComponent } // Edición del perfil
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateUserRoutingModule { }
