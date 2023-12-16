import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'weather-forecast', loadComponent: () => import('./weather-forecast/weather-forecast.component').then(m => m.WeatherForecastComponent)
    },
    {
        path: 'cloud-cast', loadComponent: () => import('./cloud-cast/cloud-cast.component').then(m => m.CloudCastComponent)
    },
];