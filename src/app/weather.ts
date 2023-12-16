import { getLocaleDateTimeFormat } from "@angular/common"

export class weather{
    time?: Date;
    temperature?: string;

    constructor(time: Date, temperature: string){
        this.time = time;
        this.temperature = temperature;
    }
}