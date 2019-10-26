import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ApiComponent } from './paginas/api/api.component';
import { LoginComponent } from './paginas/login/login.component';
import { AppRouting } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmpregadosEnum } from './enums/empregados.enum';
import { ContribuicoesEnum } from './enums/contribuicoes.enum';
import { DependentesEnum } from './enums/dependentes.enum';
import { In26Enum } from './enums/in26.enum';
import { StorageMemoryService } from './services/storage-memory.service';
import { LayoutPersonalizadoComponent } from './paginas/layout-personalizado/layout-personalizado.component';
import { LayoutValiaComponent } from './paginas/layout-valia/layout-valia.component';
import { LayoutPersonalizadoResolver } from './paginas/layout-personalizado/layout-personalizado.resolve';
import { AjaxService } from './services/ajax.service';
import { UtilService } from './services/util.services';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';

import { DashboardComponent } from './paginas/dashboard/dashboard.component';
import { DetalheRemessaComponent } from './paginas/detalhe-remessa/detalhe-remessa.component';
import { AnaliseCriticasComponent } from './paginas/analise-criticas/analise-criticas.component';

const PAGINAS = [
  ApiComponent,
  LoginComponent,
  LayoutPersonalizadoComponent,
  LayoutValiaComponent,
  DashboardComponent,
  DetalheRemessaComponent,
  AnaliseCriticasComponent
];

const RESOLVERS = [
  LayoutPersonalizadoResolver
]

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
    FormsModule,
    HttpClientModule,
    NgProgressModule,
    NgProgressHttpModule
  ],
  providers: [...ENUMS, StorageMemoryService, ...RESOLVERS, AjaxService, UtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
