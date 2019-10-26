import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './paginas/home/home.component';
import { LoginComponent } from './paginas/login/login.component';
import { AppRouting } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeAlternativaComponent } from './paginas/home-alternativa/home-alternativa.component';
import { DetalheRemessaComponent } from './paginas/detalhe-remessa/detalhe-remessa.component';
import { AnaliseCriticasComponent } from './paginas/analise-criticas/analise-criticas.component';

const PAGINAS = [
  HomeComponent,
  LoginComponent,
  HomeAlternativaComponent,
  DetalheRemessaComponent,
  AnaliseCriticasComponent
];

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
