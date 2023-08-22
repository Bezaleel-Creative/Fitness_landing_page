import React from 'react'

import { Header, About, Trainers, Newsletter, Blog, Prices, Testimonial, Footer } from './containers';
import { Navbar} from './components';


import './App.css'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const App = () => {
  return (
    <div className='bg-white'>
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
  )
}

export default App