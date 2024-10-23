import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateUserComponent } from './PrivateUser.component';
import { ProfileViewEditComponent } from './profile-view-edit/profile-view-edit.component';
import { PrivateUserRoutingModule } from './private-user-routing.module.routing';

@NgModule({
  imports: [
    CommonModule,
    PrivateUserRoutingModule
  ],
  declarations: [PrivateUserComponent, ProfileViewEditComponent]
})
export class PrivateUserModule { }
