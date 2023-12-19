import { City } from "./City";
import { State } from "./State";

export interface ICityStatus {
    cities: City[];
    status: State;
}