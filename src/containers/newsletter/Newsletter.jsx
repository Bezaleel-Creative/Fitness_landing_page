import React from 'react';
import './newsletter.css';

const Newsletter = () => {
  return (
    <div className='newsletter'>
      <div className='wrapper section-padding newsletter-container'>
        <div className='newsletter-container' data-aos="zoom-in">
          <h2>SIGNUP NEWSLETTER</h2>
          <p>Get discounts for your personal fitness and gym services now.</p>
          <form>
            <div className='form'>
              <input type='text' name='fname' id='fname' placeholder='Name' />
              <input type='email' name='email' id='email' placeholder='Email' />
            </div>
            <button>SEND MESSAGE</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Newsletter