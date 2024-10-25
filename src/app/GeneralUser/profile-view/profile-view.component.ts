import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { map } from 'rxjs/operators';
import feather from 'feather-icons';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
})
export class ProfileViewComponent implements OnInit, AfterViewInit {
  profileId: string | null = null;
  isOwner = false;

  ngAfterViewInit() {
    feather.replace();
  }

  navigateToEdit() {
    const currentUrl = this.router.url;
    const id = currentUrl.split('/').pop();
    this.router.navigate([`/profile/edit/${id}`]);
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) { }

  userProfile = {
    username: 'X_AE_A_15',
    email: 'elementary221b@gmail.com',
    subscriptionType: 'Enterprise',
    biography: 'Hola! Soy un usuario muy curioso.',
    interests: ['Tecnología', 'Ciencia', 'Ciclismo'],
    profileImage: '' // URL de la imagen de perfil
  };

  selectedTab: string = 'details';

  selectTab(tab: string) {
    this.selectedTab = tab;
  }

  ngOnInit(): void {
    this.profileId = this.route.snapshot.paramMap.get('id');

    if (this.profileId) {
      this.authService.getSession().pipe(
        map(session => session?.user ? session?.user.id === this.profileId : false)
      ).subscribe(isOwner => {
        this.isOwner = isOwner;
      });
    } else {
      this.router.navigate(['/error']);
    }
  }
}
