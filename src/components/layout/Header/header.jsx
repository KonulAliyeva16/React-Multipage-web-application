import React from 'react';
import TopNav from './topNav';
import Navbar from './navbar';
import Swiper from './MainSwiper';
import Content from './content';
function Header() {
  return (
    <div>
      <header>
        <TopNav/>
        <Navbar />
        <Swiper/>
        <Content/>
      </header>
    </div>
  )
}

export default Header;
