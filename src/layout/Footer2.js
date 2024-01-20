import React from 'react'
import { Link } from 'react-router-dom';

export const Footer2 = () => {
  return (
    <>
    <div className="text-center sm:flex  gap-8 justify-center mt-20 pb-10 text-slate-300">
      <Link to="/">  <p>Home</p> </Link>
      <Link to="/About">  <p>About</p> </Link>
      <Link to="/Shopping">  <p>Market</p> </Link>
      <Link to="/">  <p>Terms</p> </Link>
      <Link to="/">  <p>Support</p> </Link>
      <Link to="/">  <p>Data Privacy</p> </Link>
      <Link to="/Contact us">  <p>Contact Us</p> </Link>
    </div>
    
    </>
  )
}
