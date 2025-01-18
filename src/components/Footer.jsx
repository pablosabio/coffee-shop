/*import React from 'react';
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

export default Footer;*/

import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#D2B48C", padding: "20px 40px", color:"white", }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {/* About Us Section */}
        <div style={{ flex: "1" }}>
          <h3>About Us</h3>
          <p>
            Suscipit ornare tortor turpis mus rhoncus iaculis montes hendrerit,
            phasellus inceptos non ante sociis facilisi blandit. Sapien mattis
            eleifend ultrices venenatis donec, purus malesuada sociosqu est.
          </p>
        </div>

        {/* Quick Links Section */}
        <div style={{ flex: "1" }}>
          <h3>Quick Links</h3>
          <ul style={{ listStyleType: "none", padding: "0" }}>
            <li><Link to="/Versand" style={{color: "white"}}>Versand</Link></li>
            <li><Link to="/privacy-policy" style={{color: "white"}}>Privacy Policy</Link></li>
            <li><Link to="/terms-conditions" style={{color: "white"}}>Terms & Conditions</Link></li>
            <li><Link to="/return" style={{color: "white"}}>Return</Link></li>
          </ul>
        </div>

        {/* Contact Details Section */}
        <div style={{ flex: "1" }}>
          <h3>Contact Details</h3>
          <address>
            49 Featherstone Street<br />
            London EC1Y8SY United Kingdom<br />
            Toll Free No. 1800-384-4854<br />
            Email Id: <a href="mailto:Coffbrew@Yahoo.com">Coffbrew@Yahoo.com</a>
          </address>
        </div>
      </div>

      {/* Social Media Icons */}
      <div style={{ marginTop: "20px", display: "flex", justifyContent: "center", gap: "20px" }}>
        <Link to="/">
          <FaFacebook size={30} />
        </Link>
        <Link to="/">
          <FaInstagram size={30} />
        </Link>
        <Link to="/">
          <FaLinkedin size={30} />
        </Link>
        <Link to="/">
          <FaYoutube size={30} />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;




