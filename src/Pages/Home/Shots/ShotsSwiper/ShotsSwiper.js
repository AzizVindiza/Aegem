import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ShotSwiper1 from './ShotsSwiper1.jpg'
import ShotSwiper2 from './ShotsSwiper2.jpg'
import ShotSwiper3 from './ShotsSwiper3.jpg'
import ShotSwiper4 from './ShotsSwiper4.jpg'
import ShotSwiper5 from './ShotsSwiper5.jpg'
// Import Swiper style4
import "swiper/css";
import "swiper/css/navigation";
import { Navigation} from "swiper";
const ShotsSwiper = () => {



    return (

        <>
            <Swiper
                slidesPerView={2}
                spaceBetween={50}
                loop={true}
                modules={[Navigation]}
                navigation={true}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={ShotSwiper1} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={ShotSwiper2} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={ShotSwiper3} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={ShotSwiper4} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={ShotSwiper5} alt=""/>
                </SwiperSlide>
                <span className="swiper-line">

                    </span>



            </Swiper>
        </>
    );
}
export default ShotsSwiper;




