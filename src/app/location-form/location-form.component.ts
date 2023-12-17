import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';
import { LocationService } from '../../shared/services/location.service';
import { NgIf, NgFor } from '@angular/common';
import { City } from '../../shared/models/City';
import { CitySelectorComponent } from '../city-selector/city-selector.component';
import { WeatherService } from '../../shared/services/weather.service';

@Component({
  selector: 'app-location-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor, CitySelectorComponent ],
  templateUrl: './location-form.component.html',
  styleUrl: './location-form.component.scss'
})
export class LocationFormComponent {
  locationForm: FormGroup = new FormGroup({
    location: new FormControl('')
  });

  cities: City[] = [];

  constructor(
    private locationService: LocationService,
    private weatherService: WeatherService
    ){
    this.locationService = locationService;
  }

  async onSubmit(form: FormGroup) {
    let res = await this.locationService.getLocation(form.value.location);
    this.cities = res.results.map((val: any)=>{
      return new City(val.name,val.country, val.latitude,val.longitude)
  });
  }

  async citySelected(city: City) {
    console.log(city);
    let res = await this.weatherService.getTemperatureCurrent(city.latitude,city.longitude);
    console.log(res);
  }

}
