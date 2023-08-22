import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

// import required modules
import { Autoplay, EffectFade } from 'swiper/modules';

import './header.css';


const Header = () => {
  return (
    <div className='header'>
    <Swiper
    spaceBetween={30}
    effect={'fade'}
    loop={true}
    centered-slides={true}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    navigation={true}
    modules={[Autoplay, EffectFade]}
    className="mySwiper">
      <SwiperSlide className='imageOne'>
        <div className='hero-text'>
          <h4 data-aos="zoom-in-down" data-aos-duration="1500">Hello! you are welcome to</h4>
          <h1 data-aos="fade-up" data-aos-duration="2000">PROFESSIONAL FITNESS CLUB</h1>
          <a href='#about' className='btn' data-aos="fade-up" data-aos-duration="2000">LEARN MORE</a>
        </div>
      </SwiperSlide>
      <SwiperSlide className='imageTwo'>
        <div className='hero-text'>
          <h4 data-aos="zoom-in-down" data-aos-duration="1500">Hello! you are welcome to</h4>
          <h1 data-aos="fade-up" data-aos-duration="2000">PROFESSIONAL FITNESS CLUB</h1>
          <a href='#about' className='btn' data-aos="fade-up" data-aos-duration="2000">LEARN MORE</a>
        </div>
      </SwiperSlide>
    </Swiper>

    

    </div>
  )
}

export default Header