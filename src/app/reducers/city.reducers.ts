import { createReducer, on } from "@ngrx/store";
import { citySelected } from "./city.actions";
import { City } from "../../shared/models/City";

export enum CityStatus {
    pending,
    success,
    error,
}

export interface CityState {
    cities: City[];
    status: CityStatus
}

export const initialState : CityState = {
    cities: [],
    status: CityStatus.pending
}

export const selectCityReducer = createReducer(
    initialState,
    on(citySelected, (state, {city}) => ({
        ...state,
        cities: [city],
        status: CityStatus.success,
    })),
)