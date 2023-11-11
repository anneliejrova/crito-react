import React from 'react'
import SectionTitle from './SectionTitle'
import Reason from './Reason'
import ThumbsUpIcon from '../assets/images/Icon-thumb.svg'
import StratergyIcon from '../assets/images/Icon-strategic.svg'
import DesignIcon from '../assets/images/Icon-design.svg'
import AiIcon from '../assets/images/Icon-ai.svg'
import WomenPhoto from '../assets/images/women-at-desk.png'


const WhyUs = () => {
  return (
    <div className="why-us">
        <div className="grey"></div>
        <div className="container">
            <div className="why-txt">
                <SectionTitle title="Why Choose Us" txt="Why We Are The Best Business Consulting Agency" />
                
                        <div className="reasons">

                            <Reason img={ThumbsUpIcon} imgtxt="Thumbs up icon" title="Process Excellence" txt="Lorem, ipsum dolor sit amet consectetur." />
                            <Reason img={StratergyIcon} imgtxt="Stratergy icon" title="Strategic Planning" txt="Lorem, ipsum dolor sit amet consectetur." />
                            <Reason img= {DesignIcon} imgtxt="Design icon" title="Experience Design" txt="Lorem, ipsum dolor sit amet consectetur." />
                            <Reason img={AiIcon} imgtxt="AI icon" title="Artificial Inteligenc" txt="Lorem, ipsum dolor sit amet consectetur." />

                        </div>
                    </div>
                    <div className="why-img">
                        <img src={WomenPhoto} alt="Picture of two women working on a laptop" />
                    </div>
                </div>
    </div>
  )
}

export default WhyUs