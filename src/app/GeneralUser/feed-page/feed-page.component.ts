import { Component, OnInit } from '@angular/core';
import { AuthService, customSession } from 'src/app/auth/auth.service';
import { Post, PostFeedService } from 'src/app/services/post-feed.service';
import { LogoutDialogComponent } from '../logout-dialog/logout-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed-page',
  templateUrl: './feed-page.component.html',
  styleUrls: ['./feed-page.component.css']
})
export class FeedPageComponent implements OnInit {
  posts: Post[] = [];
  loadingPosts: boolean = false;

  constructor(private feedService: PostFeedService, public dialog: MatDialog, private authService: AuthService, private router: Router,

  ) { }

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    this.loadingPosts = true;
    const { session }: customSession = JSON.parse(localStorage.getItem('session') || '{}');

    this.feedService.getPosts(session.access_token).subscribe(
      (response: { message: string; posts: Post[] }) => {
        this.posts = response.posts;
        this.loadingPosts = false;
      },
      (error) => {
        console.error('Error fetching posts:', error);
        this.loadingPosts = false;
      }
    );
  }

  openLogoutDialog(): void {
    const dialogRef = this.dialog.open(LogoutDialogComponent, {
      width: '300px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.logout();
      }
    });
  }

  logout(): void {
    this.authService.clearSession();
    this.router.navigate(['/login']);

    // Navigate to login page or perform any other actions needed on logout
  }

}
