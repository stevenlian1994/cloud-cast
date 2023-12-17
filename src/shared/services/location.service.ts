import { Injectable } from '@angular/core';
import { ILocationService } from '../models/location-service';
@Injectable({
  providedIn: 'root'
})
export class LocationService{

  constructor() { }

  // getLocation(longitude: number, latitude: number): string {

  //   throw new Error('Method not implemented.');
  // }

  //returns 5 possible cities
  async getLocation(location: string){
    let x = await fetch("https://geocoding-api.open-meteo.com/v1/search?name=Berlin&count=5&language=en&format=json");
    return await x.json();
    // x.then((val)=>{
    //   return val.json();
    // })
  }


}
