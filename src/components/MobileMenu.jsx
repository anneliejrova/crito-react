import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const MobileMenu = () => {
  return (
    <div className='mobile-menu'>
            <nav>
            <div><NavLink to='/' onClick={() => setMenuOpen (!menuOpen)}>Home</NavLink></div>
            <div><NavLink to='/service' onClick={() => setMenuOpen (!menuOpen)}>Service</NavLink></div>
            <div><NavLink to='/news' onClick={() => setMenuOpen (!menuOpen)}>News</NavLink></div>
            <div><NavLink to='/contact' onClick={() => setMenuOpen (!menuOpen)}>Contact</NavLink></div>
            </nav>
            <div className='center-content'>
            <div className='media'>
            <a href="https://facebook.com/" target="_blank"><i className="fa-brands fa-facebook"></i></a>
            <a href="https://twitter.com/" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
            <a href="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://www.linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
            </div>   
            </div>
    </div>
  )
}

export default MobileMenu