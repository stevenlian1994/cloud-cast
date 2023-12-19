import { City } from "./City";

export class TemperatureData{
    time: Date;
    temperature: string;
    city:City

    constructor(time: Date, temperature: string, city: City){
        this.time = time;
        this.temperature = temperature;
        this.city = city;
    }
}