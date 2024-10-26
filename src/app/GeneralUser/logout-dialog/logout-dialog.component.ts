import { Component } from '@angular/core';
import {

  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  selector: 'app-logout-dialog',
  templateUrl: './logout-dialog.component.html',
  styleUrls: ['./logout-dialog.component.css'],
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
})
export class LogoutDialogComponent {



  constructor(public dialogRef: MatDialogRef<LogoutDialogComponent>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onLogoutClick(): void {
    this.dialogRef.close(true);
  }

}
