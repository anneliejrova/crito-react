import React from 'react'
import SectionTitle from './SectionTitle'
import Button from './Button'
import Topic from './Topic'
import Handshake from '../assets/images/Icon-business.svg'
import Lightbulb from '../assets/images/Icon-startup.svg'
import Graph from '../assets/images/Icon-finance.svg'
import Cogwheel from '../assets/images/Icon-risk.svg'


const Features = () => {
  return (
    <div className="features center-content">
                <div className="container">

                    <div className='section-title'>
                        <SectionTitle title="Features" txt="Our Accounting is trusted by thousand of companies"/>
                    </div>

                    <div className="learn">
                    <Button url='/' className="button btn-theme" txt='Learn More'/>
                    </div>

                    <Topic className="business" img={Handshake} imgtxt="Icon of a handshake" title="Business Advice" txt="Lorem ipsum, dolor sit amet consectetur adipisicing elit."/>
                    <Topic className="startup" img={Lightbulb} imgtxt="Icon of a person and a lightbulb" title="Startup Business" txt="Lorem ipsum, dolor sit amet consectetur adipisicing elit."/>
                    <Topic className="finance" img={Graph} imgtxt="Icon of a bank with a graph" title="Financial Advice" txt="Lorem ipsum, dolor sit amet consectetur adipisicing elit."/>
                    <Topic className="risk" img={Cogwheel} imgtxt="icon of a box and a cogwheel" title="Risk Management" txt="Lorem ipsum, dolor sit amet consectetur adipisicing elit."/>
                </div>

</div>  
)
}

export default Features