import React from 'react';
import BtnOrange from "../../BtnOrange/BtnOrange";
import FirstSwiper from "./FirstSwiper/FirstSwiper";
import elipse from './elipse.svg'
const FirstScreen = () => {
    return (
        <section className="firstScreen">
            <div className="container">
                <div className="firstScreen__row">
                    <div className="text-block">
                        <h2>Photography Studio</h2>
                        <h3>Who We Are?</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
                        <BtnOrange text='read more about us'/>
                    </div>
                    <FirstSwiper/>
                </div>
                <ul className="links">
                    <li> <a href="#">Behance</a></li>
                    <li> <a href="#">Behance</a></li>
                    <li> <a href="#">Behance</a></li>
                    <li> <a href="#">Behance</a></li>
                </ul>
            </div>

            <img className='elipse' src={elipse} alt=""/>

        </section>
    );
};

export default FirstScreen;