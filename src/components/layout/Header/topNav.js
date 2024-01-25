import React from 'react'
import { FaSearch, FaFacebookF, FaTiktok, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaBars, FaXmark } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

function TopNav() {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 250) {
      document.querySelector('.general-nav').classList.add('fixed-top');

    } else {
      document.querySelector('.general-nav').classList.remove('fixed-top');
    }
  });

  const openMenu = () => {
    document.querySelector('.activeMenu').classList.remove('d-none');

  }
  const closeMenu = () => {
    document.querySelector('.activeMenu').classList.add('d-none');

  }


  const openSearch = () => {
    document.querySelector('.search-form-mobile').classList.remove('d-none');
  }

  const closeSearch = () => {
    document.querySelector('.search-form-mobile').classList.add('d-none');

  }
  return (
    < div className="general-nav ">
      <div className="container">
        <div className="title-main">
          <a className='btn-general border d-none d-xl-flex'>
            <div>Rezervasion</div>
          </a>
          <div className='mobile-menu-btn d-xl-none d-flex'>
            <button onClick={() => openMenu()} ><FaBars /></button>
          </div>
          <div className='activeMenu  d-none'>
            <div className='mobile-menu'>
              <div className='top'>
                <div className="logo">
                  <img src={(require('../../../assets/image/logo/logo.png'))} alt="bashkent" />
                </div>
                <div className='close-menu-btn'>
                  <button onClick={() => closeMenu()} ><FaXmark /></button>
                </div>
              </div>
              <div className="mobile-links">
                <NavLink className="btn-general" to='/'>Main Page</NavLink>
                <NavLink className="btn-general" to='/about'>About Us</NavLink>
                <NavLink className="btn-general" to='/restaurants'>Restaurants</NavLink>
                <NavLink className="btn-general" to='/meals'>Meals</NavLink>
                <NavLink className="btn-general" to='/gallery'>Gallery</NavLink>
                <NavLink className="btn-general" to='/menu'>Menu</NavLink>
                <NavLink className="btn-general" to='/comments'>Comments</NavLink>
                <NavLink className="btn-general" to='/contact'>Contact</NavLink>
              </div>

              <div className='bottom'>
                <div className="sosial-icons">
                  <a href="/"><FaFacebookF /></a>
                  <a href="/"><FaTiktok /></a>
                  <a href="/"><FaLinkedinIn /></a>
                  <a href="/"><FaYoutube /></a>
                  <a href="/"><FaInstagram /></a>
                </div>
              </div>
            </div>

          </div>
          <a href='/' className="logo">
            <img src={require('../../../assets/image/logo/logo.png')} alt="bashkent" />
          </a>
          <div className='search-button-mobile'>
            <button onClick={() => openSearch()} className='d-xl-none d-flex'>
              <FaSearch />
            </button>
          </div>
          <div className="search-form-mobile d-none">
              <button onClick={() => closeSearch()} className="close-button d-xl-none">
                <FaXmark />
              </button>

              <form action="#">
                <input type="text" />
                <button><FaSearch /></button>
              </form>
            </div>
          <div className="right d-none d-xl-flex">
            <div className="sosial-icons d-none d-xl-flex">
              <a href="/"><FaFacebookF /></a>
              <a href="/"><FaTiktok /></a>
              <a href="/"><FaLinkedinIn /></a>
              <a href="/"><FaYoutube /></a>
              <a href="/"><FaInstagram /></a>
            </div>
            <div className="search-form ">
              <form>
                <input type="text" placeholder="Search" />
                <button>
                  <FaSearch />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
export default TopNav;