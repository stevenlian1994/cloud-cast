import { Component, OnInit } from '@angular/core';
import { fetchWeatherApi } from 'openmeteo';
import { AsyncPipe, NgFor, NgIf} from '@angular/common';
import { weather } from '../weather';

@Component({
  selector: 'app-weather-forecast',
  standalone: true,
  imports: [AsyncPipe, NgFor, NgIf],
  templateUrl: './weather-forecast.component.html',
  styleUrl: './weather-forecast.component.scss'
})
export class WeatherForecastComponent implements OnInit {
  location = 'Hamburg, Germany';
  weather? : Promise<any>;
  weatherData : any;
  async getTemperature3Days() : Promise<any>{
    const params = {
      "latitude": 53.5507,
      "longitude": 9.993,
      "daily": "temperature_2m_max",
      "timezone": "Europe/Berlin",
      "forecast_days": 3
    };
    const url = "https://api.open-meteo.com/v1/forecast";
    const responses = await fetchWeatherApi(url, params);
    
    // Helper function to form time ranges
    const range = (start: number, stop: number, step: number) =>
      Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);
    
    // Process first location. Add a for-loop for multiple locations or weather models
    const response = responses[0];
    
    // Attributes for timezone and location
    const utcOffsetSeconds = response.utcOffsetSeconds();
    const daily = response.daily()!;
    
    // [
    //   1702681200,
    //   1702767600,
    //   1702854000,
    // ].map((t)=>new Date((t + utcOffsetSeconds)*1000))
    // Note: The order of weather variables in the URL query and the indices below need to match!

    const weatherData = {
      daily: {
        time: range(Number(daily.time()), Number(daily.timeEnd()), daily.interval()).map(
          (t) => new Date((t + utcOffsetSeconds) * 1000)
        ),
        temperature2mMax: daily.variables(0)!.valuesArray()!,
      },
    };
    
    return(weatherData);
  }

  async getTemperatureCurrent() : Promise<any>{
      
    const params = {
      "latitude": 53.5507,
      "longitude": 9.993,
      "current": "temperature_2m",
      "timezone": "Europe/Berlin",
      "forecast_days": 3
    };
    const url = "https://api.open-meteo.com/v1/forecast";
    const responses = await fetchWeatherApi(url, params);

    // Process first location. Add a for-loop for multiple locations or weather models
    const response = responses[0];

    // Attributes for timezone and location
    const utcOffsetSeconds = response.utcOffsetSeconds();

    const current = response.current()!;

    // Note: The order of weather variables in the URL query and the indices below need to match!
    const weatherData = {
      current: {
        time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
        temperature2m: current.variables(0)!.value(),
      },
    };
    return weatherData;
  }

  async createWeatherDataObject(weatherData: any){
    let x = await weatherData;
    return new weather(x.current.time,x.current.temperature2m);
  }

  async printWeather(weatherData: any){
    let wD = await weatherData;
    for (let i = 0; i < wD.daily.time.length; i++) {
      console.log(
        wD.daily.time[i].toISOString(),
        wD.daily.temperature2mMax[i]
      );
    }
  }
  // async mapToArray(weatherData: any){
  //   let wD = await weatherData;
  //   // let result = wD.daily.time.map((w:any)=>w);
  //   let result = wD.daily.time.map((w:any)=>new weather(w.toISOString()));

  //   return result;
  // }

  ngOnInit(): void {
    // let async_result = this.getTemperature3Days()
    
    // this.printWeather(async_result);
    // this.weather = this.mapToArray(async_result);
    let wD = this.createWeatherDataObject(this.getTemperatureCurrent());
    wD.then((w)=>{
      console.log(w.temperature);
      this.weatherData=w});
  }
}
