import React from 'react'
import './about.css'

import overview from '../../assets/overview.jpg';

const About = () => {
  return (
    <div className='section-padding ' id='about'>
      <div className='about-grid wrapper'>
        <div className='about-img' data-aos="fade-up" data-aos-duration="1500">
          <div className='about-img-container'>
            <img src={overview} alt='about-img' />
          </div>
          <div className='word-frame'>
            <p>Fitness is free website template that can be used for any company. You may download, modify and use this layout for your website.</p>
          </div>
        </div>
        <div className='about-text' data-aos="fade-up" data-aos-duration="1500">
          <h2>ABOUT FITNESS</h2>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat.</p>

          <p>Fitness web template includes total 2 pages. This is an index (main) page and another is a <a href='blog'>blog page</a>.</p>

          <div data-aos="fade-up" data-aos-duration="2500">
            <a href='#trainer' className='about-btn' >
              LET US BEGIN
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About