import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { GetLastSalaryPipe } from './pipes/getLastSalary.pipe';
import { FormTestComponent } from './person/formTest/formTest.component';
import { FormsModule } from '@angular/forms';
import { RowComponent } from './table/row/row.component';
import { TableComponent } from './table/table/table.component';

@NgModule({
  declarations: [	
    AppComponent,
    PersonComponent,
    GetLastSalaryPipe,
    FormTestComponent,
    RowComponent,
    TableComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
