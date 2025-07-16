import { FaLongArrowAltRight } from "react-icons/fa";
import React from 'react'
import { useNavigate } from "react-router-dom";


export const HeroSection = () => {
  const navigate=useNavigate();
  return (
     <main className='hero-section main'>
        <div className="container">
          <div className="hero-content">
            <h1 className='heading-xl'>EXPLORE THE WORLD <br /> AROUND YOU</h1>
            <p className='paragraph'> Discover the  history, culture and beauty of every nation. Sort, search and filter through countries to find the details you want.</p>
            <button onClick={()=> navigate('/Country')} className='btn btn-darken btn-inline bg-white-box'> Explore Now <FaLongArrowAltRight/></button>
          </div>
        
          <div className="hero-image">
            <img src="/images/world.png" alt="world-image" className='banner-image' />
          </div>
        </div>
       </main>
  )
}
