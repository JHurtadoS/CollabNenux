import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-c',
  templateUrl: './dialog-c.component.html',
})
export class DialogCComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<DialogCComponent>) {
    this.form = this.fb.group({
      codigo: ['', Validators.required],
      descripcion: ['', Validators.required],
      version: ['', Validators.required],
    });
  }

  agregar() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value); 
    } else {
      alert('Todos los campos son requeridos');
    }
  }

  cancelar() {
    this.dialogRef.close(); 
  }
}
