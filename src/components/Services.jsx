import React from 'react'
import Button from './Button'
import WaveRight from '../assets/images/wave-right.svg'
import SectionTitle from './SectionTitle'
import ServiceCard from './ServiceCard'

const Services = () => {
  return (
    <div className="services">
                <div className="lines">
                    <img src={WaveRight} className="bg-lines" alt="wave pattern"/>
                </div>
                <div className="container">

                <SectionTitle title="Our services" txt="We Provide The Best Service For Consulting" />
              
                    <div className="cards">

                        <ServiceCard title="Business Advice" txt="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." />
                        <ServiceCard title="Startup Business" txt="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." />
                        <ServiceCard title="Financial Advice" txt="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." />
                        <ServiceCard title="Risk Management" txt="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." />

                    </div>
                    <div className="center-content">
                        <Button txt="Browse Services" url="/" className="btn-transparent" />
                    </div>
                </div>
            </div>
  )
}

export default Services