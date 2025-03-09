import React from 'react';
import { BannerImg } from '../assets/images';

function Hero() {
  return (
    <section className='heroSection'>
        <div className='heroInner container'>
      <div className='heroText'>
        <h1>Central Texas <br /> Fly Fishing</h1>
        <p>At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis cursus vestibulum, facilisi ac, sed faucibus.</p>
        <button className='mainBtn'>Get Started</button>
      </div>
      <div className='heroImg'>
        <img src={BannerImg} alt="Fly Fishing Scene"  />
      </div>
      </div>
    </section>
  );
}

export default Hero;