import { ProfileComponent } from './profile/profile.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { Routes, RouterModule } from "@angular/router";

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';

import { LoginGuardGuard } from './../services/guards/login-guard.guard';

const pagesRoutes: Routes = [
    {
      path: '',
      component: PagesComponent,
      canActivate: [ LoginGuardGuard ],
      children: [
        { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard' } },
        { path: 'progress', component: ProgressComponent, data: { titulo: 'Barras de progreso' } },
        { path: 'graficas1', component: Graficas1Component, data: { titulo: 'Graficos' } },
        { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' } },
        { path: 'rxjs', component: RxjsComponent, data: { titulo: 'Observables' } },
        { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Configuración de la cuenta' } },
        { path: 'profile', component: ProfileComponent, data: { titulo: 'Perfil de usuario' } },
        { path: '', redirectTo: "/dashboard", pathMatch: "full" }
      ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );