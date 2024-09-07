import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesTestingComponent } from './services-testing.component';
import { ProductosComponent } from 'src/app/modules/services-testing/api-component/api-component.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    ProductosComponent // Asegúrate de exportar el componente si lo vas a usar fuera del módulo
  ],
  declarations: [ServicesTestingComponent, ProductosComponent]
})
export class ServicesTestingModule { }
