export class City{
    private _name: string;
    private _longitude: number;
    private _latitude: number;
    private _country: string;
    public get country(): string {
        return this._country;
    }
    public set country(value: string) {
        this._country = value;
    }
    
    constructor(name: string, country: string, latitude: number, longitude: number){
        this._name = name;
        this._latitude = latitude;
        this._longitude = longitude;
        this._country = country;
    }

    public get latitude(): number {
        return this._latitude;
    }
    public set latitude(value: number) {
        this._latitude = value;
    }

    public get longitude(): number {
        return this._longitude;
    }
    public set longitude(value: number) {
        this._longitude = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
}