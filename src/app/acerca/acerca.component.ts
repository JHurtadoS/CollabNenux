import { Component } from '@angular/core';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent {
  programa: string = 'XXXXXXXXXXXX'; 
  desarrollador: string = 'XXXXXXXXXXXX'; 
  fechaActual: string = new Date().toLocaleDateString(); 

  constructor() {}
}
