import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>We Ensure better education for a better world</h1>
            <p>VISION =&gt; To be an institute of excellence in technical education and research to serve the needs of the industry and society at local and global levels.</p>
            <button className="btn">Explore more <img src={dark_arrow} alt="" /></button>
        </div>
      
    </div>
  )
}

export default Hero
