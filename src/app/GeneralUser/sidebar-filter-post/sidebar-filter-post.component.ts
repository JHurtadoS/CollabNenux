import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar-filter-post',
  templateUrl: './sidebar-filter-post.component.html',
  styleUrls: ['./sidebar-filter-post.component.css']
})
export class SidebarFilterPostComponent {
  filters = [
    { name: 'Tema 1', expanded: false },
    { name: 'Tema 2', expanded: false },
    { name: 'Tema 3', expanded: false }
  ];

  toggleFilter(filter: { expanded: boolean; }): void {
    filter.expanded = !filter.expanded;
  }

}
