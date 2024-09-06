import { Component, OnInit } from '@angular/core';
import { employ } from '../employ/employ.component';





@Component({
  selector: 'app-table-employs',
  templateUrl: './table-employs.component.html',
  styleUrls: ['./table-employs.component.css']
})

export class TableEmploysComponent implements OnInit {

  constructor() { }
  
  employees: employ[] = [
    { nombre: 'Juan Pérez', edad: 10, sueldo: 3250000 },
    { nombre: 'Ana Gómez', edad: 18, sueldo: 2248000 },
    { nombre: 'Carlos López', edad: 15, sueldo: 155000 },
    { nombre: 'Laura Martínez', edad: 25, sueldo: 147000 },
    { nombre: 'Pedro Fernández', edad: 14, sueldo: 160000 }
  ];



  ngOnInit() {
  }

}
