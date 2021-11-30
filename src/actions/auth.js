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
                const userdata={
                    id: new Date().getTime(), displayName: username, photo: "",
                }
                localStorage.setItem("user",JSON.stringify(userdata));
                dispatch(auth(userdata));
            }else{
                dispatch(error("Credenciales incorrectas"));
            }
        },100);
    };
};
export const authLogoutAsync = () => {
    return(dispatch) => {
       setTimeout(()=>{
           localStorage.removeItem("user");
           dispatch(logout());
        },100);
    };
};
export const logout = (user) => {
    return{
        type: types.authLogout,
        payload: null,
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