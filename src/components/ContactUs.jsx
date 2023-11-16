import React from 'react'

const ContactUs = () => {
  return (
  <div className="contact-us">
  <div className="container">

      <div className="card">
          <div className="icon">
              <div className="round-black center"><i className="fa-solid fa-location-dot"></i></div>
          </div>
          <div className="card-txt">
              <h3>Visit us</h3>
              <p>
                  <a href="https://maps.app.goo.gl/oYhedJNakjLYVYx68" target="_blank">
                      Sveavägen 31<br />
                      111 34 STOCKHOLM
                  </a>
              </p>
          </div>
      </div>

      <div className="card">
          <div className="icon">
              <div className="round-black center"><i className="fa-solid fa-phone"></i></div>
          </div>
          <div className="card-txt">
              <h3>Call us</h3>
              <p><a href="tel:+46812147050">+46 (8) 121 470 50</a>
                  <a href="tel:+46812147051">+46 (8) 121 470 51</a>
              </p>
          </div>


      </div>

      <div className="card">
          <div className="icon">
              <div className="round-black"><i className="fa-solid fa-envelope"></i></div>
          </div>
          <div className="card-txt">
              <h3>Email us</h3>
              <p><a href="mailto:info@crito.com">info@crito.com</a>
                  <a href="support@crito.com">support@crito.com</a>
              </p>
          </div>

      </div>
  </div>
</div>
  )
}

export default ContactUs