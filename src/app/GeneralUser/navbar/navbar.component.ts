import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router: Router) { }


  @Output() logoutClicked = new EventEmitter<void>();

  onLogoutClick(): void {
    this.logoutClicked.emit();
  }

}
