import React, { useRef, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

// import required modules
import { Autoplay, EffectFade } from 'swiper/modules';


import './slider.css'

const Slider = (imgOne, imgTwo) => {
  return (
    <div>
        <Swiper
        spaceBetween={30}
        effect={'fade'}
        loop={true}
        centered-slides={true}
        autoplay={{
            delay: 1500,
            disableOnInteraction: false,
        }}
        navigation={true}
            modules={[Autoplay, EffectFade]}
            className="mySwiper"
        >
            <SwiperSlide>
                <img src={imgOne} alt='slider 1' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={imgTwo} alt='slider 1' />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Slider