import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestOwnServicesService {

constructor() {

 }

 
 getData()
 {
  const productos = [
    {
        codigo: "P001",
        descripcion: "Camiseta de algodón",
        precio: 15.99
    },
    {
        codigo: "P002",
        descripcion: "Jeans de mezclilla",
        precio: 39.99
    },
    {
        codigo: "P003",
        descripcion: "Zapatillas deportivas",
        precio: 49.99
    },
    {
        codigo: "P004",
        descripcion: "Gorra ajustable",
        precio: 12.49
    },
    {
        codigo: "P005",
        descripcion: "Sudadera con capucha",
        precio: 29.99
    }
];

  return productos
}

}
