import React from 'react'
import { FaFacebookF, FaTiktok ,FaLinkedin,FaYoutube,FaInstagram,FaEnvelope } from "react-icons/fa";
import { FaLocationDot,FaPhone } from "react-icons/fa6";
function Footer() {
  return (
    <div>
      <div className='footer'>
      <div class="container">
        <div class="row">
          <div class="col-12 col-xxl-3 logo-col">
            <div class="inner">
              <a class="logo" href="/">
                <img src="/static/media/logo.62ae72fd9cd865fe6eb9.png" alt="logo" />
              </a>
              <div class="sosial-icons">
                <a href="/"><FaFacebookF/></a>
                <a href="/"><FaTiktok/></a>
                <a href="/"><FaLinkedin/></a>
                <a href="/"><FaYoutube/></a>
                <a href="/"><FaInstagram/></a>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4 col-xxl-3">
            <div class="footer-links">
              <h2 class="title">Menues</h2>
              <a href="/">Home Page</a>
              <a href="/about">About Us</a>
              <a href="/filial">Restaurants</a>
              <a href="/food">Meals</a>
              <a href="/gallery">Gallery</a>
              <a href="/menu">Menu</a>
              <a href="/comment">Comment</a>
              <a href="/contact">Contact</a>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4 col-xxl-3">
            <div class="footer-links">
              <h2 class="title">Usefull links</h2>
              <a href="/">Questions</a>
              <a href="/">Job offer</a>
              <a href="/">Services</a>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4 col-xxl-3">
            <div class="footer-links">
              <h2 class="title">Location</h2>
              <a href="/">
                <FaLocationDot/> Azərbaycan, Bakı ş., Əhməd Rəcəbli</a>
              <a href="/"><FaPhone/> 0554501102</a>
              <a href="/"><FaEnvelope/> bashkentrestoran@gmail.com</a>
            </div>
          </div>
        </div>
        <div class="bottom">
          <div class="text">© 2023 | Copyright.</div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Footer;
