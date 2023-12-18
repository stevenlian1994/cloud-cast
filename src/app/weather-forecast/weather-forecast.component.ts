import { Component } from '@angular/core';
import { AsyncPipe, NgFor, NgIf} from '@angular/common';
import { WeatherService } from '../../shared/services/weather.service';
import { TemperatureData } from '../../shared/models/TemperatureData';
import { Store } from '@ngrx/store';
import { CityState, CityStatus } from '../reducers/city.reducers';
import { Observable } from 'rxjs';
import { City } from '../../shared/models/City';

@Component({
  selector: 'app-weather-forecast',
  standalone: true,
  imports: [AsyncPipe, NgFor, NgIf],
  templateUrl: './weather-forecast.component.html',
  styleUrl: './weather-forecast.component.scss'
})
export class WeatherForecastComponent {
  location = 'TBD';
  weather? : Promise<any>;
  weatherData? : TemperatureData;
  city$ : Observable<CityState>;
  city?: City;

  constructor(private weatherService: WeatherService, private store: Store<{selectCityReducer: CityState}>){
    this.weatherService = weatherService;
    this.city$ = this.store.select('selectCityReducer');
    this.city$.subscribe((val)=>{
      if(val.status===CityStatus.success){
        this.city = val.cities[0];
        this.getWeatherData(val.cities[0].latitude, val.cities[0].longitude);
      }
    })
  }

  getWeatherData(latitude: number, longitude: number){
    let wD = this.weatherService.createWeatherDataObject(this.weatherService.getTemperatureCurrent(latitude, longitude));
    wD.then((w)=>{
      this.weatherData=w});
  }
}
