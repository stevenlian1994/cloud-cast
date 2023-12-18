import { createAction } from "@ngrx/store";
import { City } from "../../shared/models/City";

export const citySelected = createAction('[City Selector Component City Selected', (city: City) => ({city}))

