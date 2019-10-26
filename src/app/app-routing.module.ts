import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './paginas/login/login.component';
import { ApiComponent } from './paginas/api/api.component';
import { LayoutPersonalizadoComponent } from './paginas/layout-personalizado/layout-personalizado.component';
import { LayoutValiaComponent } from './paginas/layout-valia/layout-valia.component';
import { LayoutPersonalizadoResolver } from './paginas/layout-personalizado/layout-personalizado.resolve';
import { DashboardComponent } from './paginas/dashboard/dashboard.component';
import { DetalheRemessaComponent } from './paginas/detalhe-remessa/detalhe-remessa.component';
import { AnaliseCriticasComponent } from './paginas/analise-criticas/analise-criticas.component';


const routes: Routes = [

    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'api', component: ApiComponent },
    { path: 'layout-personalizado', component: LayoutPersonalizadoComponent, resolve: { data: LayoutPersonalizadoResolver } },
    { path: 'layout-valia', component: LayoutValiaComponent },
    { path: 'dashboard', component: DashboardComponent},
    { path: 'detalhe-remessa', component: DetalheRemessaComponent},
    { path: 'analise-criticas', component: AnaliseCriticasComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload', scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule]
})

export class AppRouting { }
