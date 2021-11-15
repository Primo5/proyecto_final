import React from "react";
import {Link} from "react-router-dom"
import {MdPersonPin, MdVpnKey} from "react-icons/md"
export const LoginComponent = () => {
const [form, handlerChangeForm, handlerResetForm]= useForm({
    username:"",
    password:"",
});
const {username, password} =form;
    return (
        <div className="container">
        <div className="d-flex justify-content-center h-100">
            <div className="card">
                <div className="card-header">
                    <h3>Sign in</h3>
                </div>
                <div className="card-body">
                    <form>
                        <div className="input-group form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <MdPersonPin/>
                                    </span>
                            </div>
                            <input 
                            type="text" 
                            className="form-control" 
                            name="username" 
                            value={username} 
                            onChange={handlerChangeForm}
                            placeholder="username"/>
                        </div>
                        <div className="input-group form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                <MdVpnKey/>    
                                </span>
                            </div>
                            <input type="password" className="form-control" placeholder="password"/>
                        </div>
                        <div className="row align-items-center remember">
                            <input type="checkbox"/>Renember Me     
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Login" className="btn float-right login_btn"/>
                        </div>
                    </form>
                </div>
                <div className="card-footer">
                    <div className="d-flex justify-content-center links">
                        Don't have an account?<Link to="/register">Sign Up</Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}