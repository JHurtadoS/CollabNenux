import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NoUserRoutingModule } from './routes-no-user-pages.routing';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NoUserRoutingModule,
    HttpClientModule
  ], exports: [NoUserRoutingModule]
})
export class NoUserPagesModule {
  constructor() {
    console.log('NoUserPagesModule Loaded');
  }
}

