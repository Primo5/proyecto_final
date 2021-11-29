import { types } from "../types/types";

    export const counterReducer = (state = 0, action) => {
        switch(action.type){
        case types.incrementCounter: {
            return state + action.payload;
        }
        case types.decrementCounter: {
            return state - action.payload;
        }
        case types.resetCounter: {
            return action.payload;
        }

        default: {
            return state;
        }
    }
}