import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ganarComponente',
  templateUrl: './ganarComponente.component.html',
  styleUrls: ['./ganarComponente.component.css']
})
export class GanarComponenteComponent implements OnInit {

  num1: number;
  num2: number;
  num3: number;

  constructor() {
    this.num1 = this.getRandomNumber();
    this.num2 = this.getRandomNumber();
    this.num3 = this.getRandomNumber();
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  getRandomNumber(): number {
    return Math.floor(Math.random() * 6) + 1; // Genera un número entre 1 y 6
  }

  tirar(): void {
    this.num1 = this.getRandomNumber();
    this.num2 = this.getRandomNumber();
    this.num3 = this.getRandomNumber();
  }

  resultado(): string {
    if (this.num1 === this.num2 && this.num2 === this.num3) {
      return '¡Ganaste!';
    } else {
      return 'Perdiste, inténtalo de nuevo.';
    }
  }

}
