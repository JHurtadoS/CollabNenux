import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-profile-view-edit',
  templateUrl: './profile-view-edit.component.html',
})
export class ProfileViewEditComponent implements OnInit {
  profileId: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.profileId = this.route.snapshot.paramMap.get('id');

    if (!this.profileId || !this.authService.isOwner(this.profileId)) {
      this.router.navigate(['/error']); // Redirigir si no es el propietario
    }
  }

  saveProfile(): void {
    console.log('Perfil guardado.');
  }
}
