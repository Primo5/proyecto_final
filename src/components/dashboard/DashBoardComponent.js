import React from "react"
import { FaAlignJustify } from "react-icons/fa";
import { FcBusinessman, FcCalendar } from "react-icons/fc";
import { useSelector, useDispatch } from "react-redux"
import {Route,Switch, Redirect, Link} from "react-router-dom"
import { authLogoutAsync } from "../../actions/auth"
import 'bootstrap/dist/css/bootstrap.min.css';
import {MainDashBoard} from "./MainDashBoard"
import "./styles.css"

export const DashboardComponent = ({children, ...rest}) => {
   const {auth}= useSelector(state => state);
   const {user}=auth;
   const dispatch= useDispatch();
    const handlerLogOut=()=>{
        dispatch(authLogoutAsync());
    };

    return user == null?(<Redirect to="/login"/>):(<>
            <input type="checkbox" id="check"/>
            <label for="check">
                <div className="fas fa-bars">
                    <FaAlignJustify className="icon"/>
                </div>
            </label>
            <div className="admin-titulo"><h1>Admin</h1></div>
            <div className="sidebar">
                <header>My App</header>
                <ul>
                <li><a href="/"><i className="fas fa-qrcode"></i>DashBoard</a></li>
                <li><Link to="./App" ><FcBusinessman/><i className="fas fa-link"></i>Docentes</Link></li>
                <li><a href="#"><i className="fas fa-stream"></i>Materias</a></li>
                <li><a href="#"><i className="fas fa-calendar-week"></i>Programar</a></li>
                <li><a href="#"><i className="fas fa-question-circle"></i>Ambientes</a></li>
                <li><a href="#"><i className="fas fa-sliders-h"></i>Horario</a></li>
                <li><a href="#" onClick={handlerLogOut}><i className="fas fa-envelope"></i>LogOut</a></li>
                </ul>
            </div>
            <Switch>
                <Route path="/dashboard" component={MainDashBoard}/>
            </Switch>
            </>);
}