import React from 'react'
import Headline from './Headline'
import Button from './Button'
import Topic from './Topic'

const Features = () => {
  return (
    <div className="features center-content">
                <div className="container">

                    <div>
                        <Headline />
                    </div>
                    <div className="learn">
                    <Button url='/' className="button btn-theme" txt='Learn More'/>
                    </div>

                    <div className="topic business">
                        <img src="img/Icon-business.svg" alt="Icon of a handshake">
                        <h3>
                            Business Advice
                        </h3>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </div>

                    <div className="topic startup">
                        <img src="img/Icon-startup.svg" alt="Icon of a person and a lightbulb">
                        <h3>
                            Startup Business
                        </h3>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </div>

                    <div className="topic finance">
                        <img src="img/Icon-finance.svg" alt="Icon of a bank with a graph">
                        <h3>
                            Financial Advice
                        </h3>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </div>

                    <div className="topic risk">
                        <img src="img/Icon-risk.svg" alt="icon of a box and a cogwheel">
                        <h3>
                            Risk Management
                        </h3>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </div>
                </div>
            </div>
  )
}

export default Features