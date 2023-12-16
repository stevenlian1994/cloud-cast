import { Component, OnInit } from '@angular/core';
import { AsyncPipe, NgFor, NgIf} from '@angular/common';
import { WeatherService } from '../../shared/services/weather.service';
import { TemperatureData } from '../../shared/models/TemperatureData';

@Component({
  selector: 'app-weather-forecast',
  standalone: true,
  imports: [AsyncPipe, NgFor, NgIf],
  templateUrl: './weather-forecast.component.html',
  styleUrl: './weather-forecast.component.scss'
})
export class WeatherForecastComponent implements OnInit {
  location = 'TBD';
  weather? : Promise<any>;
  weatherData? : TemperatureData;
  latitude? : number;
  longitude? : number;

  constructor(private weatherService: WeatherService){
    this.weatherService = weatherService;
  }

  ngOnInit(): void {
    this.latitude=53.5507;
    this.longitude=9.993;

    let wD = this.weatherService.createWeatherDataObject(this.weatherService.getTemperatureCurrent(this.latitude, this.longitude));
    wD.then((w)=>{
      this.weatherData=w});
  }
}
