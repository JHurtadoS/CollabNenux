import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './noUserPages/login/login.component';
import { RegisterComponent } from './noUserPages/register/register.component';
import { ProfileViewComponent } from './GeneralUser/profile-view/profile-view.component';
import { ProfileViewEditComponent } from './PrivateUser/profile-view-edit/profile-view-edit.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileViewComponent },
  { path: 'profile/edit', component: ProfileViewEditComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor() {
    console.log('AppRoutingModule Loaded');
  }
}
