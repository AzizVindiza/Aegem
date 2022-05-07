import React from 'react';
import BtnOrange from "../../BtnOrange/BtnOrange";
import shotsLines from './shotsLines.svg'
import ShotsSwiper from "./ShotsSwiper/ShotsSwiper";
import {motion} from "framer-motion";
import youtubeicon from './1.svg'
import shooticon from './2.svg'
import editicon from './icon3.svg'
import ShotsCardImg1 from './shotsCardImg.jpg'
import ShotsCardImg2 from './shotsCardImg2.jpg'
import ShotsCardImg3 from './shotsCardImg3.jpg'
import shotsTextBg from './shotsText-blockBg.png'

const Shots = () => {
    return (
        <section className="shots">
            <div className="container">
                <div className="top-row">
                    <motion.div className="text-block"
                                transition={{
                                    ease: "easeOut",
                                    duration: 2,
                                }}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 ,y:[100,0]}}
                                viewport={{ once: true }}>
                        <h2>Best Shots</h2>
                        <p>I don’t rush, I don’t stylize, I just experience and grasp emotions which float in the air. I capture moments the way they come.</p>
                        <BtnOrange text="browse all images"/>
                        <div className="shotsTextBg">
                            <img src={shotsTextBg}  alt=""/>
                        </div>

                    </motion.div>
                    <ShotsSwiper/>

                </div>
                <div className="bottom-row">
                    <div className="bottom-row-card">
                        <div className='bottom-row-card-img'>
                            <img src={ShotsCardImg3} alt=""/>
                        </div>

                        <div className='bottom-row-card-widget'>
                            <img src={youtubeicon} alt=""/>
                            <h4>Shooting</h4>
                            <p>Lorem Ipsum&nbsp;is simply dummy text of the printing and typesetting industry</p>
                        </div>
                    </div>
                    <div className="bottom-row-card">
                        <img src={ShotsCardImg2} alt=""/>
                        <div className='bottom-row-card-widget'>
                            <img src={shooticon} alt=""/>
                            <h4>Video</h4>
                            <p>Lorem Ipsum&nbsp;is simply dummy text of the printing and typesetting industry</p>
                        </div>

                    </div>
                    <div className="bottom-row-card">
                        <img src={ShotsCardImg1} alt=""/>
                        <div className='bottom-row-card-widget'>
                            <img src={editicon} alt=""/>
                            <h4>Editing</h4>
                            <p>Lorem Ipsum&nbsp;is simply dummy text of the printing and typesetting industry</p>
                        </div>

                    </div>
                </div>
            </div>
            <img className='shotsLines' src={shotsLines} alt=""/>

        </section>
    );
};

export default Shots;