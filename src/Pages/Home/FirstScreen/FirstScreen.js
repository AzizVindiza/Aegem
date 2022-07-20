import React from 'react';
import BtnOrange from "../../BtnOrange/BtnOrange";
import FirstSwiper from "./FirstSwiper/FirstSwiper";
import {motion} from "framer-motion";
import elipse from './elipse.svg'
const FirstScreen = () => {
    return (
        <motion.section
            className="firstScreen"
            animate={{y:[100,0]}}
            transition={{
                ease: "easeOut",
                duration: 4,

            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}>
            <div className="container">
                <div className="firstScreen__row row tex">
                    <motion.div
                        className="text-block text-center text-md-start d-flex d-md-block flex-column align-items-center col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6"
                        animate={{y:[100,0]}}
                        transition={{
                            ease: "easeOut",
                            duration: 4,

                        }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2>Photography Studio</h2>
                        <h3>Who We Are?</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
                        <BtnOrange text='read more about us'/>
                    </motion.div>
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
        </motion.section>
    );
};

export default FirstScreen;
const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
}