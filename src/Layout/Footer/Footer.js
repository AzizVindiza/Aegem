import React from 'react';
import logo from '../Header/logo.svg'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer__top">
                    <img src={logo} alt=""/>
                    <h3>Phlox Studio</h3>
                    <p>
                        +1985 898 7522
                        +1985 898 7512
                        Support@phlox.com
                        USA, NewYork, 520 E 6th St, NY20005
                    </p>
                </div>

            </div>
            <div className="footer__bottom">
                <p>© 2022 Phlox Photography. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;