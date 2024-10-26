import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService, customSession } from 'src/app/auth/auth.service';
import { map } from 'rxjs/operators';
import feather from 'feather-icons';
import { Project, ProjectServiceForUsersService } from 'src/app/services/project-service-for-users.service';

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
    private authService: AuthService,
    private profileService: ProjectServiceForUsersService
  ) { }

  userProfile = {
    username: 'X_AE_A_15',
    email: 'elementary221b@gmail.com',
    subscriptionType: 'Enterprise',
    biography: 'Hola! Soy un usuario muy curioso.',
    interests: ['Tecnología', 'Ciencia', 'Ciclismo'],
    profileImage: '' // URL de la imagen de perfil
  };
  loadingProjects: boolean = false;
  projects: Project[] = [];
  selectedTab: string = 'details';

  selectTab(tab: string) {
    this.selectedTab = tab;
    if (tab === 'projects') {
      this.loadProjects();
    }
  }

  loadProjects() {
    this.loadingProjects = true;
    const session: customSession = JSON.parse(localStorage.getItem('session') || '{}');
    console.log(session)
    const userId = session.user?.id;
    const token = session.session.access_token;

    if (userId && token) {
      this.profileService.getProjects(userId, token).subscribe(
        (response: { message: string; projects: Project[] }) => {
          console.log(response.projects)
          this.projects = response.projects;
          this.loadingProjects = false;
        },
        (error) => {
          console.error('Error fetching projects:', error);
          this.loadingProjects = false;
        }
      );
    } else {
      console.error('User ID or token is missing.');
      this.loadingProjects = false;
    }
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
