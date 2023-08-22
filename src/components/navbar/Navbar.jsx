import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import './navbar.css'

import 'animate.css'


const Menu = () => (
  <>
  <p><a href="../../../public/index.html">Home</a></p>
  <p><a href="#about">About</a></p>
  <p><a href="#trainers">Trainers</a></p>
  <p><a href="#blog">Blog</a></p>
  <p><a href="#prices">Prices</a></p>
  <p><a href="#testimonials">Testimonials</a></p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='bg-white p-absolute fixed' data-aos="fade-down" data-aos-easing="linear"
    data-aos-duration="1500" data-aos-offset="800">
      <div className='wrapper navbar'>
        <div className='navbar-logo'>
          <h3>Fitness</h3>
        </div>
        <div className='navbar-links'>
          <Menu />
        </div>
        <div className='navbar-menu'>
          {toggleMenu
            ? <RiCloseLine color="#333" size={27} onClick={()=> setToggleMenu(false)} cursor="pointer" /> 
            : <RiMenu3Line color="#333" size={27} onClick={()=> setToggleMenu(true)} cursor="pointer" />
          }
          {toggleMenu && (
            <div className='navbar-menu-links animate__fadeInDown' >
              <div className='navbar-menu-links-container animate__fadeInDown' data-aos="fade-right"
              data-aos-easing="ease-in-sine">
                <Menu />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar