import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-user-pages',
  templateUrl: './noUserPages.component.html',
  styleUrls: ['./noUserPages.component.css']
})
export class NoUserPagesComponent implements OnInit {
  ngOnInit(): void {
    alert('NoUserPagesComponent Loaded');  // Esta alerta aparecerá cuando se cargue el componente
  }

}
