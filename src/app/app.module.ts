import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneralUserModule } from './GeneralUser/GeneralUser.module';
import { PrivateUserModule } from './PrivateUser/PrivateUser.module';
import { NoUserPagesModule } from './noUserPages/noUserPages.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GeneralUserModule,
    PrivateUserModule,
    NoUserPagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
