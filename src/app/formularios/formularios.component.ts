import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {

  actividad = new FormControl();
  lista: string[]=[];

  ngOnInit(): void {
    this.lista = [];
    let datos = localStorage.getItem("actividades");
    if (datos != null) {
      let arreglo = JSON.parse(datos);
      if (arreglo != null) {
        for (let actividad of arreglo) {
          this.lista.push(actividad);
        }
      }
    }
  }

  agregar() {
    this.lista.push(this.actividad.value);
    localStorage.setItem("actividades", JSON.stringify(this.lista));
    this.actividad.setValue('');
  }
  
  borrar(pos: number) {
    this.lista.splice(pos, 1);
    localStorage.clear();
    localStorage.setItem("actividades", JSON.stringify(this.lista));
  }
  
  borrarTodas() {
    localStorage.clear();
    this.lista = [];
  }
  

}
