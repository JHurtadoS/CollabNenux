import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  nombre: string = "Linares Pablo";
  edad: number = 54;
  email: string = "test@gmail.com";
  activo: boolean = true;
  sueldos: number[] = [10000, 20000, 3000];

  constructor() { }

  getTotalSalary(): number {
    return this.sueldos.reduce((ac, curr) => ac + curr, 0);
  }

  ngOnInit() {
    // Inicialización si es necesario
  }

}
