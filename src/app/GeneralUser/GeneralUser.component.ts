import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generaluser',
  templateUrl: './GeneralUser.component.html',
  styleUrls: ['./GeneralUser.component.css']
})
export class GeneralUserComponent implements OnInit {
  ngOnInit(): void {
    alert('NoUserPagesComponent Loaded');  // Esta alerta aparecerá cuando se cargue el componente
  }
}
