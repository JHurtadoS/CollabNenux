import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
})
export class ProfileViewComponent implements OnInit {
  profileId: string | null = null;
  isOwner = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.profileId = this.route.snapshot.paramMap.get('id');

    if (this.profileId) {
      this.authService.getSession().pipe(
        map(session => session ? session.userId === this.profileId : false)
      ).subscribe(isOwner => {
        this.isOwner = isOwner;
      });
    } else {
      this.router.navigate(['/error']);
    }
  }
}
