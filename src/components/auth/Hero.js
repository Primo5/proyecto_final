import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Hero.module.css';


export const Hero = () => {
    return (
        <div>
            <header className={classes.main}>
                <nav className={classes.navbar}>
                    <div className={classes.logo}>
                     
                    </div>
                    <div className={classes.links}>
                        <Link to="./#">Home</Link>
                        <Link to="./login">SignIn</Link>
                        <Link to="./#">Acerca de</Link>
                    </div>
                </nav>
                <div className={classes.content}>
                    <div className={classes.slogan}>
                        <h1 className={classes.title}>Universidad Autonoma Tomas Frias</h1>
                        <p>Sistema de gestion de horarios realizada por la carrera de Ingenieria de Sistemas</p>
                        <Link to="./register"><button >Registrarse</button></Link>
                    </div>
                </div>
            </header>
        </div>
    );
};
