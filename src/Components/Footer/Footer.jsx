import React from 'react'
import './Footer.css'
import { assets } from '../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
           <img src={assets.logo} alt="" />
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, maxime accusamus? Atque quod pariatur velit id sed possimus porro minima maxime! Ratione qui hic accusamus quas voluptatum aperiam fugiat rerum.</p>
           <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
           </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <li>Home</li>
          <li>About Us</li>
          <li>Delivery</li>
          <li>Privacy policy</li>
          </div>
        <div className="footer-content-right">
              <h2>GET IN TOUCH</h2>
              <ul>
                <li>+91 9589050819</li>
                <li>santosh@gmail.com</li>
              </ul>
        </div>   
      </div>
      <hr />
      <p className='footer-copyright'>Copyright 2024 @ Tomato.com  - All Right Reserved.</p>
    </div>
  )
}

export default Footer