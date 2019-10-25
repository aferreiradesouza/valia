import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './paginas/login/login.component';
import { DasboardComponent } from './paginas/dashboard/dashboard.component';

const routes: Routes = [

    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'login', component: LoginComponent},
    { path: 'dashboard', component: DasboardComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload', scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule]
})

export class AppRouting { }
