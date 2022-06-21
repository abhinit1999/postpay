import React from 'react'
import About from './About';
import Contact from './Contact';
// import Footer from './Footer';
import Header from './Header';
import HowItWorks from './HowItWorks';
// import Navbar from './navbar';
import Service from './Service';

const Home = () => {
  return (
    <>
    {/* <Navbar/> */}
    <Header/>
    <HowItWorks/>
    <About/>
    <Service/>
    <Contact/>
    {/* <Footer/> */}
    
    
    </>
  )
}

export default Home;