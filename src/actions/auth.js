import {types} from "../types/types";
export const authAsync = (username, password) => {
    return(dispatch) => {
        /*     id,
                displayName,
                photo
                 */
        setTimeout(()=>{
            if(username === "primo" && password === "1234")
            {
                dispatch(
                    auth({id: new Date().getTime(), displayName: username, photo: ""})
                    );
            }else{
                dispatch(error("Credenciales incorrectas"));
            }
        },100);
    };
};

export const auth = (user) => {
    return{
        type: types.authLogin,
        payload: user,
    };
};
export const error = (msn) => {
    return {
        type:types.authError,
        payload: msn,
    };
};