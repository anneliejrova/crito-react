import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../assets/images/crito_logo.svg'
import Button from './Button'
import MobileMenu from './MobileMenu'




const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
    { menuOpen ? (<MobileMenu />) : (<></>)}
    
    <header>
    <div className="container">
        <div><Link to='/'> <img className='logo' src={Logo} alt="" /> </Link></div>
        <div className="menu-bars-btn">
            <button onClick={() => setMenuOpen (!menuOpen)}>
            {menuOpen ? (<i className="fa-solid fa-xmark"></i>) : (<i className="fa-solid fa-bars"></i>)}
        
            </button>
        </div>
        


        <div className="menu">
            <div className="top-menu">
                <div className="contact-info">
                    <div className="first content-box">
                        <a href="tel:+46812147050"> <i className="fa-light fa-phone-volume"></i>
                            <span>+46(8) 121 470 50</span></a>
                    </div>
                    <div className="content-box">
                        <a href="mailto:info@crito.com">
                            <i className="fa-regular fa-envelope"></i>
                            <span>info@crito.com</span></a>

                    </div>
                    <div className="last content-box">
                        <a href="https://maps.app.goo.gl/oYhedJNakjLYVYx68" target="_blank"><i
                                className="fa-regular fa-location-dot"></i>
                            <span>Sveavägen 31, 111 34 STOCKHOLM</span></a>

                    </div>
                </div>
                <div className="so-media">
                    <a href="https://facebook.com/" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                    <a href="https://twitter.com/" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
                    <a href="https://www.instagram.com/" target="_blank"><i
                            className="fa-brands fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/" target="_blank"><i
                            className="fa-brands fa-linkedin"></i></a>

                </div>
            </div>
            <div className="main-menu">
                <nav>
                <div><NavLink to='/'>Home</NavLink></div>
                <div><NavLink to='/service'>Service</NavLink></div>
                <div><NavLink to='/news'>News</NavLink></div>
                <div><NavLink to='/contact'>Contact</NavLink></div>
                </nav>
                <Button url="/" txt="Login" className="button btn-theme" />
            </div>
        </div>
    </div>
</header>
</>
  )
}

export default Header
