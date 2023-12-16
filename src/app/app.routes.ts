import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: '', redirectTo: 'weather-forecast', pathMatch: 'full'},
    {
        path: 'weather-forecast', loadComponent: () => import('./weather-forecast/weather-forecast.component').then(m => m.WeatherForecastComponent)
    },
    {
        path: 'cloud-cast', loadComponent: () => import('./cloud-cast/cloud-cast.component').then(m => m.CloudCastComponent)
    },
];