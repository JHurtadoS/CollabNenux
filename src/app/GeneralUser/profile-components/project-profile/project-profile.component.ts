import { Component } from '@angular/core';

@Component({
  selector: 'app-project-profile',
  templateUrl: './project-profile.component.html',
  styleUrls: ['./project-profile.component.css']
})
export class ProjectProfileComponent {

  // constructor() { }

  projects = [
    { name: 'Proyecto 1', description: 'Descripción del Proyecto 1.' },
    { name: 'Proyecto 2', description: 'Descripción del Proyecto 2.' }
  ];

}
