import { RouterModule, Routes } from "@angular/router";


import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { RxjsComponent } from './rxjs/rxjs.component';


const pagesRoutes: Routes = [
    { 
        path: '', 
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard'}},
            { path: 'progress', component: ProgressComponent, data: { title: 'Progress'} },
            { path: 'account-settings', component: AccountSettingsComponent, data: { title: 'Ajustes del Tema'} },
            { path: 'graficas1', component: Graficas1Component, data: { title: 'Gráficas'} },
            { path: 'rxjs', component:  RxjsComponent, data: { title: 'Rxjs'}},
            { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
        ]
    }
];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );