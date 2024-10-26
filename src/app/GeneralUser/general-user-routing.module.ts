import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { authGuard } from '../auth/auth.guard';
import { FeedPageComponent } from './feed-page/feed-page.component';

const routes: Routes = [
  { path: 'profile/:id', component: ProfileViewComponent, canActivate: [authGuard] },
  { path: 'feed', component: FeedPageComponent, canActivate: [authGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralUserRoutingModule { }
