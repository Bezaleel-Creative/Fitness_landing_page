import React from 'react';

import { FaFacebookF, FaTwitter, FaDribbble, FaBehance, FaGooglePlusG } from "react-icons/fa6";

import './footer.css';

const Footer = () => {
  return (
    <div className='bg-color'>
      <div className='section-padding wrapper'>
        <div className='footer'  data-aos="fade-in" data-aos-duration="2000">
          <div className='footer-container'>
            <h2>ABOUT FITNESS</h2>
            <p className='footer-about'>Nunc id turpis tincidunt dui volutpat hendrerit et efficitur dolor. Morbi quis tempor felis, ut dictum ipsum. Praesent venenatis rutrum interdum.</p>
          </div>
          <div className='footer-container'>
            <h2>SESSIONS</h2>
              <div className='day-time'>
                <p className='session'>Morning</p>
                <p className='time'>6:00 AM - 11:00 PM</p>
              </div>
              <div>
                <p className='session'>Morning</p>
                <p className='time'>6:00 AM - 11:00 PM</p>
              </div>
          </div>
          <div className='footer-container'>
            <h2>FOLLOW US</h2>
              <div className='icons'>
                <a href='https://facebook.com'><FaFacebookF color='#fff' fontSize={14} /> </a>
                <a href='https://facebook.com'><FaTwitter color='#fff' fontSize={14} /> </a>
                <a href='https://facebook.com'><FaDribbble color='#fff' fontSize={14} /> </a>
                <a href='https://facebook.com'><FaBehance color='#fff' fontSize={16} /> </a>
                <a href='https://facebook.com'><FaGooglePlusG color='#fff' fontSize={16} /> </a>
              </div>
          </div>
        </div>
        <div className='copywrite'>
          <p>Copyright © 2023 Your Company | Design: Bezaleel</p>
        </div>
      </div>
    </div>
  )
}

export default Footer