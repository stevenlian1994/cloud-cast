import { createActionGroup, props } from "@ngrx/store";
import { City } from "../../shared/models/City";

export const cityActionGroup = createActionGroup({
    source: 'City',

    // In the context of NgRx, props often refer to the payload or data that you include when dispatching an action. When you create an action using NgRx, you define a type for the action and optionally include a payload (props) that carries data relevant to the action. Here's an example:
    events: {
        'select': props<{city: City}>()
    }
})