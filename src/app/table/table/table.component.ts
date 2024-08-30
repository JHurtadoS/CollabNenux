import { Component, OnInit } from '@angular/core';
import { Item } from '../row/row.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  codigo: number = 0;
  nombre: string = "";
  precio: number = 0;

  items: Item[] = [];

  addItem() {
    const newItem: Item = {
      codigo: this.codigo,
      descripcion: this.nombre,
      precio: this.precio,
    };
  
    const existingItemIndex = this.items.findIndex(item => item.codigo === this.codigo);
  
    if (existingItemIndex !== -1) {
      this.items[existingItemIndex] = newItem;
    } else {
      this.items.push(newItem);
    }
  
    this.codigo = 0;
    this.nombre = "";
    this.precio = 0;
  }
  
  deleteItem(item: Item) {
    this.items = this.items.filter(e => e.codigo !== item.codigo);
  }


  selectItem(item: Item) {
    this.codigo = item.codigo
    this.nombre = item.descripcion
    this.precio = item.precio
  }

  ngOnInit() {
  }

}
