import React from 'react';
import './blog.css';

const Blog = () => {
  return (
    <div className='section-padding wrapper' id='blog'>
      <div className='blog'>
        <h2>FITNESS BLOG</h2>
        <p className='blog-para'>Lorem ipsum dolor sit amet, maecenas eget vestibulum justo.</p>
        <div className='blog-cards'>
          <div className='blog-card' data-aos="flip-left" data-aos-duration="1500">
            <p className='date'>Body Fitness / July 2, 2016</p>
            <a href='blog' className='title'>How to get a fitness model body?</a>
            <div className='author'>by David Walker</div>
          </div>
          <div className='blog-card' data-aos="flip-right" data-aos-duration="2000">
            <p className='date'>Healthy Fit / June 8, 2016</p>
            <a href='blog' className='title'>Personal Fitness Tips</a>
            <div className='author'>by George</div>
          </div>
          <div className='blog-card' data-aos="flip-left" data-aos-duration="2500">
            <p className='date'>Gym Services / May 9, 2016</p>
            <a href='blog' className='title'>Efficient Workout Plans</a>
            <div className='author'>by Mary Louis</div>
          </div>
          <div className='blog-card' data-aos="flip-right" data-aos-duration="3000">
            <p className='date'>Practice Aerobics / April 18, 2016</p>
            <a href='blog' className='title'>by Michael Fit</a>
            <div className='author'>by David Walker</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog