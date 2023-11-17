import React from 'react'
import { Link } from 'react-router-dom'
import Wave from '../assets/images/wave-footer.svg'
import Logo from '../assets/images/crito-logo-white.svg'

const Footer = () => {
  return (
    <footer>
        <div className="footer-menu">
          <div className="lines">
          <img src={Wave} className="bg-lines3" />
          </div>
          <div className="container">
            <div className="logo-info">
              <img src={Logo} alt="Crito logo" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas
                voluptates!<span> Voluptates laborum nam ratione minus necessitatibus, iure
                praesentium.</span>
              </p>
            </div>

            <div className="menu">

              <div className="company menu-item">
                <div className="title">
                  <Link to='/'><h3>Company</h3></Link>
                </div>
                <div className="specified-menu">
                  <Link to='/' className="menu-item">About</Link>
                  <Link to='/' className="menu-item">Features</Link>
                  <Link to='/' className="menu-item">Works</Link>
                  <Link to='/' className="menu-item">Career</Link>
                </div>
              </div>

              <div className="help menu-item">
                <div className="title">
                  <Link to='/'><h3>Help</h3></Link>
                </div>
                <div className="help-menu specified-menu">
                  <Link to='/' className="menu-item">Customer Support</Link>
                  <Link to='/' className="menu-item">Delivery Details</Link>
                  <Link to='/' className="menu-item">Terms & Conditions</Link>
                  <Link to='/' className="menu-item">Privacy Policy</Link>
                </div>
              </div>

              <div className="resourses menu-item">
                <div className="title">
                  <Link to='/'><h3>Resourses</h3></Link>
                </div>
                <div className="resources-menu specified-menu">
                  <Link to='/' className="menu-item">Free eBooks</Link>
                  <Link to='/' className="menu-item">Development Tutorial</Link>
                  <Link to='/' className="menu-item">How to - Blog</Link>
                  <Link to='/' className="menu-item">Youtube Playlist</Link>
                </div>
              </div>

              <div className="link menu-item">
                <div className="title">
                  <Link to='/'><h3>Link</h3></Link>
                </div>
                <div className="link-menu specified-menu">
                  <Link to='/' className="menu-item">Free eBooks</Link>
                  <Link to='/' className="menu-item">Development Tutorial</Link>
                  <Link to='/' className="menu-item">How to - Blog</Link>
                  <Link to='/' className="menu-item">Youtube Playlist</Link>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="footer-bottom">
            <div className="container">
                <div className="copy">
                    &copy; 2023 Crito - Consulting Company Inc. <span>All Rights Reserved.</span>
                </div>
                <div>
                      <Link to="https://facebook.com/" target="_blank"><i className="fa-brands fa-facebook"></i></Link>
                      <Link to= "https://twitter.com/" target="_blank"><i className="fa-brands fa-x-twitter"></i></Link>
                      <Link to="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></Link>
                      <Link to="https://www.linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin"></i></Link>
                </div>
              </div>
        </div>
    </footer>
  )
}

export default Footer