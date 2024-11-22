import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { GeneralUserComponent } from './GeneralUser.component';
import { RouterModule } from '@angular/router';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { GeneralUserRoutingModule } from './general-user-routing.module';
import { DetailsProfileComponent } from './profile-components/details-profile/details-profile.component';
import { ProjectProfileComponent } from './profile-components/project-profile/project-profile.component';
import { ProjectServiceForUsersService } from '../services/project-service-for-users.service';
import { FeedPosContainerComponent } from './feed-post-container/feed-post-container.component';
import { PostCardComponent } from './post-card/post-card.component';
import { PostActionsComponent } from './post-actions/post-actions.component';
import { CommentInputComponent } from './comment-input/comment-input.component';
import { FeedPageComponent } from './feed-page/feed-page.component';
import { SidebarFilterPostComponent } from './sidebar-filter-post/sidebar-filter-post.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CarouselModule } from 'primeng/carousel';
import { InputTextareaModule } from 'primeng/inputtextarea';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    GeneralUserRoutingModule,
    MatDialogModule,
    NgOptimizedImage,
    CarouselModule,
    InputTextareaModule
  ],
  declarations: [
    GeneralUserComponent, ProfileViewComponent, DetailsProfileComponent,
    ProjectProfileComponent, FeedPosContainerComponent, PostCardComponent,
    PostActionsComponent, CommentInputComponent, FeedPageComponent,
    SidebarFilterPostComponent, NavbarComponent],
  exports: [GeneralUserComponent],
  providers: [ProjectServiceForUsersService]

})
export class GeneralUserModule { }
