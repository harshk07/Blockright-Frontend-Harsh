import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Header from '../../layout/Header'
import About from '../../layout/About'
import Contact from '../../layout/Contact'
import Footer from '../../layout/Footer'

const LandingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  return (
    <div className='bg-black'>
   

    <Navbar/>
    <Header/>
    <About/> 
    <Contact/>
    <Footer/>
    
    </div>
  )
}

export default LandingPage