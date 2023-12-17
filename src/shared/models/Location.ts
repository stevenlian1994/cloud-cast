export class Location{
    location: string;
    private longitude?: number;
    private latitude?: number;

    constructor(location: string){
        this.location = location;
    }

    getLongitude(){
        return this.longitude;
    }

    getLatitude(){
        return this.latitude;
    }

    setLongitude(val: number){
        this.longitude = val;
    }

    setLatitude(val: number){
        this.latitude = val;
    }
}