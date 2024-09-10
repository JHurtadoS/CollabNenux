import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetLastSalaryPipe } from './pipes/getLastSalary.pipe';
import { FormsModule } from '@angular/forms';
import { RowComponent } from './table/row/row.component';
import { TableComponent } from './table/table/table.component';
import { TableEmploysComponent } from './table2/table-employs/table-employs.component';
import { EmployComponent } from './table2/employ/employ.component';
import { ServicesTestingModule } from './modules/services-testing/services-testing.module';
import { ParImparComponent } from './ngifTest/parImpar/parImpar.component';

@NgModule({
  declarations: [
    AppComponent,
    GetLastSalaryPipe,
    RowComponent,
    TableComponent,
    TableEmploysComponent,
    EmployComponent,
    ParImparComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ServicesTestingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
