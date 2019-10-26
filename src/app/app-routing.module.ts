import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './paginas/login/login.component';
import { HomeComponent } from './paginas/home/home.component';
import { LayoutPersonalizadoComponent } from './paginas/layout-personalizado/layout-personalizado.component';
import { LayoutValiaComponent } from './paginas/layout-valia/layout-valia.component';
import { LayoutPersonalizadoResolver } from './paginas/layout-personalizado/layout-personalizado.resolve';

const routes: Routes = [

    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'layout-personalizado', component: LayoutPersonalizadoComponent, resolve: { data: LayoutPersonalizadoResolver } },
    { path: 'layout-valia', component: LayoutValiaComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload', scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule]
})

export class AppRouting { }
