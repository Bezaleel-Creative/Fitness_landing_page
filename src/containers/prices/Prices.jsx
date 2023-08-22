import React from 'react';
import './prices.css';

const Prices = () => {
  return (
    <div className='bg-img' id='prices'>
      <div className='wrapper section-padding'>
        <div className='prices'>
          <h2 data-aos="fade-up" data-aos-duration="1500">OUR PRICES</h2>
          <p className='price-info'  data-aos="fade-up" data-aos-duration="2000">Lorem ipsum dolor sit amet, maecenas eget vestibulum justo.</p>
          <div className='price-cards'>
            <div  data-aos="fade-up" data-aos-duration="2000">
              <div className='price-card flex-box'>
                <h3>Healthy</h3>
                <div className='circle flex-box'>
                  <p>$350</p>
                </div>
                <div className='services flex-box'>
                  <p>One General Trainer</p>
                  <p>Gym Services</p>
                  <p>5 Yoga Courses</p>
                  <p>10 Thai Massages</p>
                  <p>15 Aerobics</p>
                </div>
                <button>Sign Up</button>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300" >
              <div className='price-card flex-box' >
                <h3>Best Fit</h3>
                <div className='circle flex-box'>
                  <p>$550</p>
                </div>
                <div className='services flex-box'>
                  <p>Two General Trainers</p>
                  <p>Gym Services</p>
                  <p>10 Yoga Courses</p>
                  <p>20 Thai Massages</p>
                  <p>25 Aerobics</p>
                </div>
                <button>Sign Up</button>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="600">
              <div className='price-card flex-box' >
                <h3>Rigid Body</h3>
                <div className='circle flex-box'>
                  <p>$750</p>
                </div>
                <div className='services flex-box'>
                  <p>Three Personal Trainers</p>
                  <p>Gym Services</p>
                  <p>15 Yoga Courses</p>
                  <p>20 Thai Massages</p>
                  <p>35 Aerobics</p>
                </div>
                <button>Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Prices