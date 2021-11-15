import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import { LoginComponent } from './auth/LoginComponent';
import { RegisterComponent } from './auth/RegisterComponent';
import { DashboardComponent } from './dashboard/DashBoardComponent';

import "../styles/styles.css"

export const RouterApp=() => {
    return (
        <Router>
            <Routes>               
                <Route exact path="/login" element={<LoginComponent/>}/>
                <Route exact path="/register" element={<RegisterComponent/>}/>
                <Route path="/" element={<DashboardComponent/>}/>
            </Routes>
        </Router>
    )
}