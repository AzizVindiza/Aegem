import React from 'react';
import logo from './logo.svg'

const Header = () => {
    return (
        <header className='header'>
            <div className="container">
                <div className="header__logo">
                    <img src={logo} alt=""/>
                    <h1>Aegem Studio</h1>
                </div>
                <div>
                    <a href="">123</a>
                    <a href="">123</a>
                    <a href="">123</a>
                    <a href="">123</a>
                </div>
            </div>

        </header>
    );
};

export default Header;