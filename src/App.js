import React, { useState, useEffect} from 'react'

import { Header, About, Trainers, Newsletter, Blog, Prices, Testimonial, Footer } from './containers';
import { Navbar} from './components';


import './App.css'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();



const App = () => {
  const [isLoading, setLoading] = useState(true);
  function someRequest() { //Simulates a request; makes a "promise" that'll run for 2.5 seconds
    return new Promise(resolve => setTimeout(() => resolve(), 2500));
  };
  useEffect(() => {
    someRequest().then(() => {
      const loaderElement = document.querySelector(".loader");
      if (loaderElement) {
        loaderElement.remove();
        setLoading(!isLoading);
      }
    });
  });
  return (
    <div className='bg-white'>
      <div className=''>
        <div className='nav-header'>
          <Navbar />
          <Header />
        </div>
        <div >
          <About />
          <Trainers />
          <Newsletter />
          <Blog />
          <Prices />
          <Testimonial />
        </div>
        <Footer />
      </div>
      <div className='loader'>
      </div>
    </div>
  )
}

export default App