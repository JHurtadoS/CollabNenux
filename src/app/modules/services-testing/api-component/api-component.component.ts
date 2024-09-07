import { Component, OnInit } from '@angular/core';
import { PruebaApiService } from 'src/app/services/prueba-api.service';

@Component({
  selector: 'app-productos',
  templateUrl: './api-component.component.html',
  styleUrls: ['./api-component.component.css']
})
export class ProductosComponent implements OnInit {

  productos: any[] = [];

  constructor(private pruebaService: PruebaApiService) { }

  ngOnInit(): void {
    this.pruebaService.getProductos().subscribe((data) => {
      // Tomamos los primeros 10 productos por ejemplo
      this.productos = data.slice(0, 10);
    });
  }
}
