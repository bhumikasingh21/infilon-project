import React from 'react';
import { Facebook, Instagram, Linkedin, logoWhite } from '../assets/svg';

function Footer() {
  return (
    <footer>
      <div className='container'>
         <div className='footerContent'>
          <div className='footerLeft'>
          <div><img src={logoWhite} alt="logo" /></div>
          <ul>
            <li>FAQ</li>
            <li>Privacy</li>
            <li>Support</li>
            <li>Contact</li>
          </ul>
          </div>
          <ul>
            <li><img src={Facebook} alt="" /></li>
            <li><img src={Instagram} alt="" /></li>
            <li><img src={Linkedin} alt="" /></li>
          </ul>
         </div>
      </div>
     <div className='footerBottom'>
      <p>&copy; 2024 Central Texas Fly Fishing. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;