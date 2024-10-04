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
import { TestingServiceComponent } from './testing-service/testing-service.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GanarComponenteComponent } from './ganarComponente/ganarComponente.component';
import { DadoComponent } from './dado/dado.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { AcercaComponent } from './acerca/acerca.component';
import { RoutesRoutes } from './routes.routing';


@NgModule({
  declarations: [				
    AppComponent,
    GetLastSalaryPipe,
    RowComponent,
    TableComponent,
    TableEmploysComponent,
    EmployComponent,
    ParImparComponent,
      TestingServiceComponent,
      GanarComponenteComponent,
      DadoComponent,
      AcercaComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ServicesTestingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    RoutesRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
