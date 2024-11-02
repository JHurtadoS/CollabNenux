import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formReact',
  templateUrl: './formReact.component.html',
  styleUrls: ['./formReact.component.css']
})
export class FormReactComponent {

  datos!: string;

  formularioContacto = new FormGroup({
    nombre: new FormControl(''),
    mail: new FormControl(''),
    mensaje: new FormControl('')
  });

  submit() {
    this.datos = `Nombre=${this.formularioContacto.value.nombre}
Mail=${this.formularioContacto.value.mail}
Mensaje=${this.formularioContacto.value.mensaje}`;   
  

  }

}
