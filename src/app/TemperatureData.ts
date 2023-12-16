
export class TemperatureData{
    time: Date;
    temperature: string;

    constructor(time: Date, temperature: string){
        this.time = time;
        this.temperature = temperature;
    }
}