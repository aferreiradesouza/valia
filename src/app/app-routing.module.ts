import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './paginas/login/login.component';
import { HomeComponent } from './paginas/home/home.component';
import { HomeAlternativaComponent } from './paginas/home-alternativa/home-alternativa.component';
import { DetalheRemessaComponent } from './paginas/detalhe-remessa/detalhe-remessa.component';
import { AnaliseCriticasComponent } from './paginas/analise-criticas/analise-criticas.component';


const routes: Routes = [

    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login', component: LoginComponent},
    { path: 'home', component: HomeComponent},
    { path: 'home-alternativa', component: HomeAlternativaComponent},
    { path: 'detalhe-remessa', component: DetalheRemessaComponent},
    { path: 'analise-criticas', component: AnaliseCriticasComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload', scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule]
})

export class AppRouting { }
