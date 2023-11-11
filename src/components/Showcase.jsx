import React from 'react'
import Lines from '../assets/images/wave-left.svg'
import ShowcaseImg from '../assets/images/showcase.svg'
import Button from './Button'
import { Link } from 'react-router-dom'

const Showcase = () => {
  return (
    <div className="showcase">
                <div className="lines">
                    <img className='bg-lines' src={Lines} alt="wave pattern" />
                </div>

                <div className="container">
                    <div className="content">
                        <h1>We Provide The Best Business Solutions</h1>
                        <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
                        <Button url='/' className="button btn-theme" txt='Get Consulting'/>
                        <Button url='/' className="button btn-transparent" txt='Learn More'/>
                    </div>
                    <img src={ShowcaseImg} alt="image of a man in a suit with a tablet" />
                </div>
    </div>
  )
}

export default Showcase