import React from 'react';
import logo from './logo.svg'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className='header'>
            <div className="container">
                <div className="header__logo">
                    <img src={logo} alt=""/>
                    <h1><NavLink className="header__title" to="">Aegem Studio</NavLink></h1>

                </div>
                <div className="header__links">
                    <NavLink className="header__links-item" to="/about-us">About Us</NavLink>
                    <NavLink className="header__links-item" to="/contact-us">Contact Us</NavLink>
                    <NavLink className="header__links-item" to="/portfolio">Portfolio</NavLink>
                    <NavLink className="header__links-item" to="/videos">Videos</NavLink>
                    <NavLink className="header__links-item" to="/book-now">Book Now</NavLink>

                </div>
            </div>

        </header>
    );
};

export default Header;