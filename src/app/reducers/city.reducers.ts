import { createReducer, on } from "@ngrx/store";
import { cityActionGroup } from "./city.actions";
import { ICityStatus } from "../../shared/models/ICityStatus";
import { State } from "../../shared/models/State";

export const initialState : ICityStatus = {
    cities: [],
    status: State.pending
}

export const selectCityReducer = createReducer(
    initialState,
    on(cityActionGroup.select, (state, {city}) => ({
        ...state,
        cities: [city],
        status: State.success,
    })),
)