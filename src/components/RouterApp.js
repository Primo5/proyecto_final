import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


import { LoginComponent } from './auth/LoginComponent';
import { RegisterComponent } from './auth/RegisterComponent';
import { Hero } from './auth/Hero';
import { DashboardComponent } from './dashboard/DashBoardComponent';

import { indexC } from './dashboard/indexC';
import { App } from './dashboard/App';
import "../styles/styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
export const RouterApp=() => {
    return (
        <Router>
            <Switch>       
                <Route exact path="/" component={Hero}/>
                <Route exact path="/login" component={LoginComponent}/>
                <Route exact path="/register" component={RegisterComponent}/>
                <Route path="/admin" component={DashboardComponent}/>
                <Route path="/administrardocentes" component={indexC}/>
                <Route path="/App" component={App}/>
               
            </Switch>
        </Router>
    )
}// 