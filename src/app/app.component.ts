import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { fetchWeatherApi } from 'openmeteo';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, WeatherForecastComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'cloud-cast';
  location = 'Hamburg, Germany';

  async getTemperatureCelsius(){
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
    // const timezone = response.timezone();
    // const timezoneAbbreviation = response.timezoneAbbreviation();
    // const latitude = response.latitude();
    // const longitude = response.longitude();
    
    //response.daily().time() gives starting time as a bigint which can be converted into human datetime
    //response.daily().timeEnd() gives ending time as bigint
    //1702681200
    //1702940400
    //86400 -> number of seconds in a day
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
    
    // `weatherData` now contains a simple structure with arrays for datetime and weather data
    for (let i = 0; i < weatherData.daily.time.length; i++) {
      console.log(
        weatherData.daily.time[i].toISOString(),
        weatherData.daily.temperature2mMax[i]
      );
    }
  }

  ngOnInit(): void {
      this.getTemperatureCelsius();
  }

}
