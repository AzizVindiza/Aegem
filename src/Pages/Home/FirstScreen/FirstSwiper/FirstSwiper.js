import React, { useRef, useState } from "react";
// Import Swiper React components
import {motion} from "framer-motion";
import HomeSwiper1 from './FirstSwiperImg1.jpg'
import HomeSwiper2 from './FirstSwiperImg2.jpg'

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/effect-fade';

// import required modules
import { Autoplay, Pagination, Navigation, EffectFade} from "swiper";

const FirstSwiper = () => {
    const pagination = {
        type:'fraction',
        clickable: false,
        formatFractionCurrent: function (number) {
            return ('0' + number).slice(-2);
        },
        formatFractionTotal: function (number) {
            return ('0' + number).slice(-2);
        },
        renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' +
                '<span class="swiper-pagination-divide"></span>' +
                '<span class="' + totalClass + '"></span>';
        }
    };
    return (
        <Swiper

            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            pagination={pagination}
            navigation={false}
            modules={[EffectFade,Autoplay, Pagination, Navigation]}
            className="mySwiper col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6" effect="fade"

        >
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}>

                <SwiperSlide>
                    <img src={HomeSwiper1} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={HomeSwiper2} alt=""/>
                </SwiperSlide>
            </motion.div>


        </Swiper>
    );
};

export default FirstSwiper;



