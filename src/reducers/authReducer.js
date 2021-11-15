import {type, types} from '../types/types'

export const authReducer = (state = null, action)=>{
    switch (action.type) {
        case types.authLogin:{
            const {id, displayName, photo}=action.payload
            return{
                id,
                displayName,
                photo
            }
        }
        case types.authLogout:{
            return null;
        }
        default:{
            return state;
        }
    }
}