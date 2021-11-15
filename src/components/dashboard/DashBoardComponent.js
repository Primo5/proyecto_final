import React from "react"
import {MdCancel} from "react-icons/md"
import { useSelector } from "react-redux"
import {Route, Routes, Navigate} from "react-router-dom"
import {MainDashBoard} from "./MainDashBoard"
import "./styles.css"

export const DashboardComponent = ({children, ...rest}) => {
   const {auth}= useSelector(state=> state);
    return (
        auth ==null?(<Navigate to="/Login"/>):(<>
            <input type="checkbox" id="check"/>
            <label for="check">
                <div className="fas fa-bars">
                    <MdCancel className="iconcolor"/>
                </div>
            </label>
            <div className="sidebar">
                <header>My App</header>
                <ul>
                <li><a href="#"><i className="fas fa-qrcode"></i>DashBoard</a></li>
                <li><a href="#"><i className="fas fa-link"></i>Shortcuts</a></li>
                <li><a href="#"><i className="fas fa-stream"></i>OverView</a></li>
                <li><a href="#"><i className="fas fa-calendar-week"></i>Events</a></li>
                <li><a href="#"><i className="fas fa-question-circle"></i>About</a></li>
                <li><a href="#"><i className="fas fa-sliders-h"></i>Services</a></li>
                <li><a href="#"><i className="fas fa-envelope"></i>Contact</a></li>
                </ul>
            </div>
            <section></section>
            <Routes>
                <Route path="/dashboard" component={<MainDashBoard/>}/>
            </Routes>
            </>)
        
    )
}