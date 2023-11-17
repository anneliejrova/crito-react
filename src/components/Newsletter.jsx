import React from 'react'
import Button from './Button'
import Squiggly from '../assets/images/squiggly.svg'

const Newsletter = () => {
  return (
    <section className="newsletter">
                <img src={Squiggly} alt="squiggly line image" className='squiggly'/>
                <div className="container">
                    <h2>Get News Updates By Signup</h2>
                    <form>
                        <input type="text" placeholder="username@domain.com" />
                        <span><br /><br /></span>
                        <Button type="Submit" className="btn-theme button" txt="Subscribe" />
                    </form>
                </div>
            </section>
  )
}

export default Newsletter