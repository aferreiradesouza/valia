import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DasboardComponent } from './paginas/dashboard/dashboard.component';
import { LoginComponent } from './paginas/login/login.component';
import { AppRouting } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const PAGINAS = [
  DasboardComponent,
  LoginComponent
]

@NgModule({
  declarations: [
    ...PAGINAS,
    AppComponent
  ],
  imports: [
    AppRouting,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
