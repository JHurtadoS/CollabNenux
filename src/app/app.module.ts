import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrivateUserModule } from './PrivateUser/PrivateUser.module';
import { NoUserPagesModule } from './noUserPages/noUserPages.module';
import { GeneralUserModule } from './GeneralUser/GeneralUser.module';
import { AuthService } from './auth/auth.service';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GeneralUserModule,
    PrivateUserModule,
    NoUserPagesModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent, AuthService]
})
export class AppModule { }
