import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './paginas/home/home.component';
import { LoginComponent } from './paginas/login/login.component';
import { AppRouting } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmpregadosEnum } from './enums/empregados.enum';
import { ContribuicoesEnum } from './enums/contribuicoes.enum';
import { DependentesEnum } from './enums/dependentes.enum';
import { In26Enum } from './enums/in26.enum';
import { StorageMemoryService } from './services/storage-memory.service';

const PAGINAS = [
  HomeComponent,
  LoginComponent
];

const ENUMS = [
  EmpregadosEnum,
  ContribuicoesEnum,
  DependentesEnum,
  In26Enum
]

@NgModule({
  declarations: [
    ...PAGINAS,
    AppComponent
  ],
  imports: [
    AppRouting,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [...ENUMS, StorageMemoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
