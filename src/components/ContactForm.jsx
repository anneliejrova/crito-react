import React from 'react'
import Button from './Button'

const ContactForm = () => {
  return (
    <div className="contactform" >
                <div className="container">
                    <div className="center-content">
                        <h3>Leave us a message for any information.
                        </h3>
                    </div>

                    <form id="messageForm" method="post" noValidate>

                        <div className="mb-3">
                            <label for="Name" className="form-label">Name</label>
                            <input className="form-input" type="text" id="Name" name="Name" title="Name" placeholder="Name*"
                                tabindex="1" />
                        </div>

                        <div className="mb-3">
                            <label for="email" className="form-label">E-mail</label>
                            <input className="form-input" type="email" id="email" name="email" title="email"
                                placeholder="Email*" tabindex="2" />
                        </div>

                        <div className="mb-5">
                            <label for="message" className="form-label">Your Message</label>
                            <textarea name="message" id="message" className="form-input" placeholder="Your Message*"
                                tabindex="3"> </textarea>
                        </div>

                        <div className='center-content'>
                            <Button type="submit" className="btn-theme" tabindex="4" txt="Send Message" />
                        </div>
                        
                    </form>

                   

                    

                </div>
            </div>
  )
}

export default ContactForm