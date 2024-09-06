import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetLastSalaryPipe } from './pipes/getLastSalary.pipe';
import { FormsModule } from '@angular/forms';
import { TestComponent1Component } from './test-component-1/test-component-1.component';
import { TestComponent2Component } from './test-component-2/test-component-2.component';
import { WrapperTestComponent } from './WrapperTest/WrapperTest.component';

@NgModule({
  declarations: [
    AppComponent,
    GetLastSalaryPipe,
TestComponent1Component,
TestComponent2Component,
      WrapperTestComponent
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
