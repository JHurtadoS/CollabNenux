import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {

  constructor() { }

  posiciones = [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']];
  jugador = "O";
  ganador: string | null = null;

  presion(fila: number, columna: number) {
    if (this.posiciones[fila][columna] === "-" && !this.ganador) {
      this.posiciones[fila][columna] = this.jugador;
      if (this.verificarGano(this.jugador)) {
        this.ganador = this.jugador;
      } else {
        this.cambiarJugador();
      }
    }
  }

  reiniciar() {
    for (let f = 0; f < 3; f++) {
      for (let c = 0; c < 3; c++) {
        this.posiciones[f][c] = "-";
      }
    }
    this.ganador = null;
    this.jugador = "O";
  }

  cambiarJugador() {
    this.jugador = this.jugador === "O" ? "X" : "O";
  }

  verificarGano(jugador: string): boolean {
    for (let f = 0; f < 3; f++) {
      if (this.posiciones[f].every(celda => celda === jugador)) {
        return true;
      }
    }
    for (let c = 0; c < 3; c++) {
      if (this.posiciones.every(fila => fila[c] === jugador)) {
        return true;
      }
    }
    if (this.posiciones[0][0] === jugador && this.posiciones[1][1] === jugador && this.posiciones[2][2] === jugador) {
      return true;
    }
    if (this.posiciones[0][2] === jugador && this.posiciones[1][1] === jugador && this.posiciones[2][0] === jugador) {
      return true;
    }
    return false;
  }

  ngOnInit() {
  }

}
