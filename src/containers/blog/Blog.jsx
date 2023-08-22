import React from 'react';
import './blog.css';

const Blog = () => {
  return (
    <div className='section-padding wrapper' id='blog'>
      <div className='blog'>
        <h2 data-aos="fade-up" data-aos-duration="1500" >FITNESS BLOG</h2>
        <p className='blog-para'  data-aos="fade-up" data-aos-duration="2000">Lorem ipsum dolor sit amet, maecenas eget vestibulum justo.</p>
        <div className='blog-cards'  data-aos="fade-up" data-aos-duration="3000">
          <div className='blog-card'>
            <p className='date'>Body Fitness / July 2, 2016</p>
            <a href='blogss' className='title'>How to get a fitness model body?</a>
            <div className='author'>by David Walker</div>
          </div>
          <div className='blog-card'>
            <p className='date'>Healthy Fit / June 8, 2016</p>
            <a href='blogsss' className='title'>Personal Fitness Tips</a>
            <div className='author'>by George</div>
          </div>
          <div className='blog-card'>
            <p className='date'>Gym Services / May 9, 2016</p>
            <a href='blogsss' className='title'>Efficient Workout Plans</a>
            <div className='author'>by Mary Louis</div>
          </div>
          <div className='blog-card'>
            <p className='date'>Practice Aerobics / April 18, 2016</p>
            <a href='blogsss' className='title'>by Michael Fit</a>
            <div className='author'>by David Walker</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog