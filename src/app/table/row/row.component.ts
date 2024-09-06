import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface Item {
  codigo: number;
  descripcion: string;
  precio: number;
}

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {

  constructor() { }

  @Input() item: Item | undefined = undefined;
  @Output() deleteItem = new EventEmitter<Item>();
  @Output() selectItem = new EventEmitter<Item>();



  // @Output() addItem = new EventEmitter<Item>();

  ngOnInit() {
  }
}