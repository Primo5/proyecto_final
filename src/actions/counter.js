import {types} from "../types/types"

export const incrementAsynCounter = (counter)=>{
    return(dispach)=>{
        setTimeout(()=>{
            dispach(incrementCounter(counter));
        },9000);
    }
}

export const incrementCounter = (counter) => {

    return {
        type: types.incrementCounter,
        payload: counter
    }
}
export const decrementCounter = (counter) => {

    return {
        type: types.decrementCounter,
        payload: counter
    }
}
export const resetCounter = (counter) => {

    return {
        type: types.resetCounter,
        payload: counter
    }
}