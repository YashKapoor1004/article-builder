import React from 'react';
import './NavBar.css';
import Button from '@material-ui/core/Button';
import logo from './assets/Frame.svg';


const NavBar = () => {

    return (
        <div className="nav-bar">
            <link rel="preconnect" href="https://fonts.gstatic.com"></link>
            <link href="https://fonts.googleapis.com/css2?family=Overpass:ital,wght@0,100;0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
                <img className="nav-bar__logo" src={logo}></img>
                <a className="nav-bar__app">App</a>
                <a className="nav-bar__articles">Articles</a>
                <a className="nav-bar__writers">Writers</a>
        </div>
    );

}

export default NavBar;