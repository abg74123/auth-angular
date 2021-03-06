import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';

const primeNg = [
  InputTextModule,
  PasswordModule
]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ...primeNg
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
