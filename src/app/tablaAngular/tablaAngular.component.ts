import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogCComponent } from '../dialog-c/dialog-c.component';
import { MatTableDataSource } from '@angular/material/table';

interface Element {
  codigo: string;
  descripcion: string;
  version: string;
}

@Component({
  selector: 'app-tablaAngular',
  templateUrl: './tablaAngular.component.html',
  styleUrls: ['./tablaAngular.component.css']
})
export class TablaAngularComponent implements OnInit {

  displayedColumns: string[] = ['codigo', 'descripcion', 'version', 'acciones'];
  dataSource = new MatTableDataSource<Element>();
  // form: FormGroup;

  constructor(private dialog: MatDialog) {
    // Inicializar con al menos 10 elementos
    const elements: Element[] = [
      { codigo: '001', descripcion: 'Elemento 1', version: '1.0' },
      { codigo: '002', descripcion: 'Elemento 2', version: '1.1' },
      { codigo: '003', descripcion: 'Elemento 3', version: '2.0' },
      { codigo: '004', descripcion: 'Elemento 4', version: '1.0' },

    ];

    this.dataSource.data = elements;
  }

  ngOnInit(): void {
  }

  abrirDialogo(): void {
    const dialogRef = this.dialog.open(DialogCComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataSource.data.push(result);
        this.dataSource.data = [...this.dataSource.data]; 
      }
    });
  }

  borrar(element: Element): void {
    const confirm = window.confirm('¿Estás seguro de que deseas borrar este elemento?');
    if (confirm) {
      this.dataSource.data = this.dataSource.data.filter(e => e !== element);
      this.dataSource.data = [...this.dataSource.data]; 
    }
  }
}
