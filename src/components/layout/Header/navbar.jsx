import React from 'react';
import { NavLink } from "react-router-dom";
import { FaSearch, FaFacebookF, FaTiktok, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaBars, FaXmark } from "react-icons/fa6";

function Navbar() {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 250) {
            document.querySelector('.fixed-nav').classList.remove('d-none');
            document.querySelector('.fixed-nav').classList.add('fixed-top');

        }else{
            document.querySelector('.fixed-nav').classList.add('d-none');
            document.querySelector('.fixed-nav').classList.remove('fixed-top');
        }
    })
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 main-links d-none d-xl-flex">
                    <div className="links">
                        <NavLink className="btn-general" to='/'>Main Page</NavLink>
                        <NavLink className="btn-general" to='/about'>About Us</NavLink>
                        <NavLink className="btn-general" to='/restaurants'>Restaurants</NavLink>
                        <NavLink className="btn-general" to='/meals'>Meals</NavLink>
                        <NavLink className="btn-general" to='/gallery'>Gallery</NavLink>
                        <NavLink className="btn-general" to='/menu'>Menu</NavLink>
                        <NavLink className="btn-general" to='/comments'>Comments</NavLink>
                        <NavLink className="btn-general" to='/contact'>Contact</NavLink>
                    </div>
                </div>

                <div className="fixed-nav d-none">
                    <div className="col-2">
                        <div className="logo">
                            <img src={(require('../../../assets/image/logo/logo.png'))} alt="bashkent" />
                        </div>
                    </div>
                    <div className="col-10">
                        <div className="links">
                            <NavLink className="btn-general" to='/'>Main Page</NavLink>
                            <NavLink className="btn-general" to='/about'>About Us</NavLink>
                            <NavLink className="btn-general" to='/restaurants'>Restaurants</NavLink>
                            <NavLink className="btn-general" to='/meals'>Meals</NavLink>
                            <NavLink className="btn-general" to='/gallery'>Gallery</NavLink>
                            <NavLink className="btn-general" to='/menu'>Menu</NavLink>
                            <NavLink className="btn-general" to='/comments'>Comments</NavLink>
                            <NavLink className="btn-general" to='/contact'>Contact</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;

