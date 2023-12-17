import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class LocationService{

  constructor() { }

  //returns 5 possible cities
  async getLocation(inputCity: string){
    let res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${inputCity}&count=5&language=en&format=json`);
    return await res.json();
  }
}
