import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { selectCityReducer } from './reducers/city.reducers';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideStore({selectCityReducer: selectCityReducer})]
};
