import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import { FaQuoteLeft } from "react-icons/fa6";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

import './testimonial.css'

const Testimonial = () => {
  return (
    <div className='section-padding wrapper' id='testimonials'>
      <div className='testimonial'  data-aos="fade-up" data-aos-duration="2000" >
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
        >
          <SwiperSlide>
            <div className='testimonial-card'>
                <p><FaQuoteLeft color='#26253a' size={70} /></p>
                <h3>Lorem ipsum dolor sit amet, maecenas eget vestibulum justo imperdiet, wisi risus purus augue vulputate.</h3>
                <p className='writer'>Sandar ( Fashion Designer )</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='testimonial-card'>
                <p><FaQuoteLeft color='#26253a' size={70} /></p>
                <h3>Lorem ipsum dolor sit amet, maecenas eget vestibulum justo imperdiet, wisi risus purus augue vulputate.</h3>
                <p className='writer'>Sandar ( Fashion Designer )</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='testimonial-card'>
                <p><FaQuoteLeft color='#26253a' size={70} /></p>
                <h3>Lorem ipsum dolor sit amet, maecenas eget vestibulum justo imperdiet, wisi risus purus augue vulputate.</h3>
                <p className='writer'>Sandar ( Fashion Designer )</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='testimonial-card'>
                <p><FaQuoteLeft color='#26253a' size={70} /></p>
                <h3>Lorem ipsum dolor sit amet, maecenas eget vestibulum justo imperdiet, wisi risus purus augue vulputate.</h3>
                <p className='writer'>Sandar ( Fashion Designer )</p>
            </div>
          </SwiperSlide>
      </Swiper>
      </div>
    </div>
  )
}

export default Testimonial