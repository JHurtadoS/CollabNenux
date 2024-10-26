import { Component, Input } from '@angular/core';
import { Project } from 'src/app/services/project-service-for-users.service';

@Component({
  selector: 'app-project-profile',
  templateUrl: './project-profile.component.html',
  styleUrls: ['./project-profile.component.css']
})
export class ProjectProfileComponent {
  @Input() projects: Project[] | null = null;

}
