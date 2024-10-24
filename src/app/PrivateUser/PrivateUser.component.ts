import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-privateuser',
  templateUrl: './PrivateUser.component.html',
  styleUrls: ['./PrivateUser.component.css']
})
export class PrivateUserComponent implements OnInit {

  ngOnInit(): void {
    alert('NoUserPagesComponent Loaded');  // Esta alerta aparecerá cuando se cargue el componente
  }

}
