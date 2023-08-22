import React from 'react'
import { FaFacebookF, FaTwitter, FaBehance } from "react-icons/fa6";
import './trainers.css'

import trainerimg1 from '../../assets/trainerimg1.jpg'
import trainerimg2 from '../../assets/trainerimg2.jpg'
import trainerimg3 from '../../assets/trainerimg3.jpg'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Trainers = () => {
  return (
    <div className='trainers' id='trainers'>
        <div className='wrapper section-padding'>
          <h2 data-aos="fade-up" data-aos-duration="2000">OUR TRAINERS</h2>
          <p data-aos="fade-up" data-aos-duration="2000">Lorem ipsum dolor sit amet, maecenas eget vestibulum justo.</p>
          <div className='trainers-img'>
            <div className='trainer-container' data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
              <div className='trainer-img'>
                <img src={trainerimg1} alt='trainer 1' />
                <div className='overlay'>
                  <h4>JENNY</h4>
                  <h5>Body Trainer</h5>
                  <div className='trainer-socials'>
                    <a href='https://facebook.com'><FaFacebookF color='#fff' size={20} /></a>
                    <a href='https://twitter.com'><FaTwitter color='#fff' size={20} /></a>
                    <a href='https://behance.com'><FaBehance color='#fff' size={20} /></a>
                  </div>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet, maecenas eget vestibulum justo imperdiet, wisi risus purus augue vulputate.</p>
            </div>

            <div className='trainer-container' data-aos="fade-up" data-aos-duration="2200" data-aos-delay="400">
              <div className='trainer-img'>
                <img src={trainerimg2} alt='trainer 2' />
                <div className='overlay'>
                  <h4>MARRY</h4>
                  <h5>Fitness Trainer</h5>
                  <div className='trainer-socials'>
                    <a href='https://facebook.com'><FaFacebookF color='#fff' size={20} /></a>
                    <a href='https://twitter.com'><FaTwitter color='#fff' size={20} /></a>
                    <a href='https://behance.com'><FaBehance color='#fff' size={20} /></a>
                  </div>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet, maecenas eget vestibulum justo imperdiet, wisi risus purus augue vulputate.</p>
            </div>

            <div className='trainer-container' data-aos="fade-up" data-aos-duration="3000" data-aos-delay="500">
              <div className='trainer-img'>
                <img src={trainerimg3} alt='trainer 3' />
                <div className='overlay'>
                  <h4>OLIVIA</h4>
                  <h5>Yoga Teacher</h5>
                  <div className='trainer-socials'>
                    <a href='https://facebook.com'><FaFacebookF color='#fff' size={20} /></a>
                    <a href='https://twitter.com'><FaTwitter color='#fff' size={20} /></a>
                    <a href='https://behance.com'><FaBehance color='#fff' size={20} /></a>
                  </div>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet, maecenas eget vestibulum justo imperdiet, wisi risus purus augue vulputate.</p>
            </div>
          
          </div>
        </div>
    </div>
  )
}

export default Trainers