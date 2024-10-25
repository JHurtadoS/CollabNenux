import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralUserComponent } from './GeneralUser.component';
import { RouterModule } from '@angular/router';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { GeneralUserRoutingModule } from './general-user-routing.module';
import { DetailsProfileComponent } from './profile-components/details-profile/details-profile.component';
import { ProjectProfileComponent } from './profile-components/project-profile/project-profile.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    GeneralUserRoutingModule
  ],
  declarations: [GeneralUserComponent, ProfileViewComponent, DetailsProfileComponent, ProjectProfileComponent],
  exports: [GeneralUserComponent]

})
export class GeneralUserModule { }
