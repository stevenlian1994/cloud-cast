import { Component } from '@angular/core';
import { AsyncPipe, NgFor, NgIf} from '@angular/common';
import { WeatherService } from '../../shared/services/weather.service';
import { TemperatureData } from '../../shared/models/TemperatureData';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { City } from '../../shared/models/City';
import { ICityStatus } from '../../shared/models/ICityStatus';
import { State } from '../../shared/models/State';

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
  city$ : Observable<ICityStatus>;
  city?: City;

  constructor(private weatherService: WeatherService, private store: Store<{selectCityReducer: ICityStatus}>){
    this.weatherService = weatherService;
    this.city$ = this.store.select('selectCityReducer');
    this.city$.subscribe((val)=>{
      if(val.status===State.success){
        this.city = val.cities[0];
        this.getWeatherData(val.cities[0]);
      }
    })
  }

  getWeatherData(city: City){
    
    let wD = this.weatherService.createWeatherDataObject(this.weatherService.getTemperatureCurrent(city), city);
    wD.then((w)=>{
      this.weatherData=w});
  }
}
