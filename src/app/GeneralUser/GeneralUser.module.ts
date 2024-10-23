import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralUserComponent } from './GeneralUser.component';
import { RouterModule } from '@angular/router';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { GeneralUserRoutingModule } from './general-user-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    GeneralUserRoutingModule
  ],
  declarations: [GeneralUserComponent, ProfileViewComponent]
})
export class GeneralUserModule { }
