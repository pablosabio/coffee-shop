import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';

function Footer  () {

  return (
    <footer className="footer">
      <div className="cardContainer">       
        <div className="leftCaed">
          <h2>Our Concept</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam nulla ut recusandae, corporis fugit unde.</p>
        </div>

        <div className='middleCard'>
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#policy" className="policy">Policy</a></li>
            <li><a href="#terms" className="terms">Terms & Conditions</a></li>
            <li><a href="#services" className="services">Services</a></li>
            <li><a href="#return" className="return">Return</a></li>
          </ul>
        </div>
        <div className="rightCard">
          <h2>Contact</h2>
          <p>Content for the right card</p>
        </div>
      </div>
      <div className="footerNav">
        <div>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-xl hover:text-blue-500" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-xl hover:text-pink-500" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="text-xl hover:text-red-500" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-xl hover:text-blue-700" />
          </a>
        </div>
        <h3>© 2025 Coffee Shop Pablo</h3>
      </div>
    </footer>
  );
};

export default Footer;


